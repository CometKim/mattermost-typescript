// Type definition automatically generated by [mattermost-typegen](https://github.com/cometkim/mattermost-typegen)

declare interface Group {
    id: string
    name: string
    display_name: string
    description: string
    remote_id: string
    create_at: number
    update_at: number
    delete_at: number
    has_syncables: boolean
}

declare interface GroupPatch {
    name: string
    display_name: string
    description: string
}


