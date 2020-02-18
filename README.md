# Alvin

Alvin allows you to manage endpoints in your enterprise by using Facebook's open source [osquery](https://osquery.io/) framework. It is build using Node.js, React and MongoDB 

# osquery 

Osquery allows you to easily ask questions about your IT Infrastructure. Whether its Windows, Linux or Mac. You can ask anything you like from; intrusion detection, system information, compliance, installed applications, running processes. Osquery empowers you to understand every part of your IT infrastructure. You can read the documentation at https://osquery.readthedocs.io/en/stable/

# Setting up osquery on endpoints

Folowing endpoints are used by Alvin to retrieve data from osquery endpoints

 url | osquery flag
-----|-------------------------------
 /enroll | `--enroll_tls_endpoint`
 /config | `--config_tls_endpoint`
 /logger | `--logger_tls_endpoint`
 /distributed_read | `--distributed_tls_read_endpoint`
 /distributed_write | `--distributed_tls_write_endpoint`
 
 
 You can start osquery with the following flags to get it up and running:
 ~~~
 osqueryd  --verbose --ephemeral --disable_database --tls_hostname localhost:4000 --tls_server_certs ..\certs\cert.pem --config_plugin tls --config_tls_endpoint /config --logger_tls_endpoint /logger --logger_plugin tls  --enroll_tls_endpoint /enroll --distributed_tls_read_endpoint=/distributed_read --distributed_tls_write_endpoint=/distributed_write --utc
 ~~~
 
 # Node List
 When you start alvin, it will take you to the List of nodes that are currently enrolled
 ![node_list](.\..\images/node_list.png)
 
