// Type definition automatically generated by [mattermost-typegen](https://github.com/cometkim/mattermost-typegen)

declare interface ClusterDiscovery {
    id: string
    type: string
    cluster_name: string
    hostname: string
    gossip_port: number
    port: number
    create_at: number
    last_ping_at: number
}

