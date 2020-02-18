const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EnrolledNode = new Schema(
{
    "host_identifier": String,
    "platform_type": String,
    "host_details": {
        "os_version": {
            "build": String,
            "codename": String,
            "install_date": String,
            "major": String,
            "minor": String,
            "name": String,
            "platform": String,
            "platform_like": String,
            "version": String
        },
        "osquery_info": {
            "build_distro": String,
            "build_platform": String,
            "config_hash": String,
            "config_valid": String,
            "extensions": String,
            "instance_id": String,
            "pid": String,
            "platform_mask": String,
            "start_time": String,
            "uuid": String,
            "version": String,
            "watcher": String
        },
        "platform_info": {
            "date": String,
            "revision": String,
            "vendor": String,
            "version": String
        },
        "system_info": {
            "computer_name": String,
            "cpu_brand": String,
            "cpu_logical_cores": String,
            "cpu_microcode": String,
            "cpu_physical_cores": String,
            "cpu_subtype": String,
            "cpu_type": String,
            "hardware_model": String,
            "hardware_serial": String,
            "hardware_vendor": String,
            "hardware_version": String,
            "hostname": String,
            "local_hostname": String,
            "physical_memory": String,
            "uuid": String
        }
    }
}
);

module.exports = mongoose.model('EnrolledNode', EnrolledNode);