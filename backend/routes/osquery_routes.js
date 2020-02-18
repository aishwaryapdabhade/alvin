const express = require('express');
const osquery_router = express.Router();;
let EnrolledNode = require('./../models/enrolled_node.model');

const GLOBAL_CONFIG = {
    "schedule": {
        "tls_proc": {"query": "select * from users", "interval": 60},
    },
    "node_invalid": false,
}


// A 'node' variation of the TLS API uses a GET for config.

const EXAMPLE_DISTRIBUTED = {
    "queries": {
        "info": "select count(1) from osquery_info",
        "flags": "select count(1) from osquery_flags",
	"uptime": "select * from uptime"
    }
}

const EXAMPLE_DISTRIBUTED_DISCOVERY = {
    "queries": {
        "windows_info": "select * from system_info",
        "darwin_chrome_ex": "select users.username, ce.* from users join chrome_extensions ce using (uid)",
    },
    "discovery": {
        "windows_info": "select * from os_version where platform='windows'",
        "darwin_chrome_ex": "select * from os_version where platform='darwin'"
    }
}

const EXAMPLE_DISTRIBUTED_ACCELERATE = {
    "queries": {
        "info": "select * from osquery_info",
    },
    "accelerate" : "60"
}

const EXAMPLE_CARVE = {
    "queries": {
        "test_carve" : "select * from carves where path='/tmp/rook.stl' and carve = 1"
    }
}

const TEST_GET_RESPONSE = {
    "foo": "baz",
    "config": "baz",
}

const TEST_POST_RESPONSE = {
    "foo": "bar",
}


const FAILED_ENROLL_RESPONSE = {
    "node_invalid": true
}

const ACK = {
    "node_invalid": false
}

const ENROLL_RESPONSE = {
}


function add_node(req,res){
	let node_key = req.body.host_details.system_info.uuid;
    console.log("Enroll request from " + node_key);
    EnrolledNode.exists({ "host_details.system_info.uuid" : node_key },function(err,result){
         if (err) {
            res.json(FAILED_ENROLL_RESPONSE);
            } else {
            console.log(result);
            if(!result)
            {
             let node = new EnrolledNode(req.body);
                node.save()
                .then(node => {
                    console.log('node added successfully');
                    //return true

                })
                .catch(err => {
                console.log('adding new node failed : ' + err);
                res.json(FAILED_ENROLL_RESPONSE);
                });
            }
            ENROLL_RESPONSE['node_key'] = node_key
            res.json(ENROLL_RESPONSE);
            }
    });
    

}

osquery_router.route('/enroll').post(function(req, res) {
	add_node(req,res);
	/*
    if (add_node(req,res)) {
        console.log(JSON.stringify(req.body, null, 4));
		ENROLL_RESPONSE['node_key'] = req.body.host_details.system_info.uuid
		res.json(ENROLL_RESPONSE)
    } else {
        res.json(FAILED_ENROLL_RESPONSE);
    }
    */
});

osquery_router.route('/config').post(function(req, res) {
	if (true) {
 
		res.json(ACK)
    } else {
        res.json(FAILED_ENROLL_RESPONSE);
    }
});

osquery_router.route('/logger').post(function(req, res) {
	if (true) {
		console.log(JSON.stringify(req.body, null, 4));
		res.json(ACK)
    } else {
        res.json(FAILED_ENROLL_RESPONSE);
    }
});


module.exports = osquery_router;