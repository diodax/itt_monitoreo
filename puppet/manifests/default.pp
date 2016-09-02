Exec { path => [ "/bin/", "/sbin/" , "/usr/bin/", "/usr/sbin/" ] }

$node_version = "v0.10.31"

class { nvm:
  node_version => $node_version
}

# include nvm
include system-update
