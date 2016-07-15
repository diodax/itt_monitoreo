# Inspired by https://github.com/TryGhost/Ghost-Vagrant/blob/master/manifests/base.pp

$node_version = "v0.10.31"

file { '/etc/motd':
	content => "
***********************************

  Node Development Virtual Machine

- OS:      Ubuntu 14.04
- Node:    ${node_version}
- IP:      192.168.33.20

***********************************
\n"
}

class { setup:
	node_version => $node_version
}

# Mongo install
# This should install mongodb server and client, in the latest mongodb-org version
# class {'::mongodb::globals':
#		manage_package_repo => true,
#		server_package_name => 'mongodb-org'
# } ->

class {'::mongodb::server':
		journal => true
}->
class {'::mongodb::client': }
