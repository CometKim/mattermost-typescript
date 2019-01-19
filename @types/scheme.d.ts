// Type definition automatically generated by [mattermost-typegen](https://github.com/cometkim/mattermost-typegen)

declare interface Scheme {
    id: string
    name: string
    display_name: string
    description: string
    create_at: number
    update_at: number
    delete_at: number
    scope: string
    default_team_admin_role: string
    default_team_user_role: string
    default_channel_admin_role: string
    default_channel_user_role: string
}

declare interface SchemePatch {
    name: string
    display_name: string
    description: string
}

declare interface SchemeIDPatch {
    scheme_id: string
}

declare interface SchemeConveyor {
    name: string
    display_name: string
    description: string
    scope: string
    default_team_admin_role: string
    default_team_user_role: string
    default_channel_admin_role: string
    default_channel_user_role: string
}

declare interface SchemeRoles {
    scheme_admin: boolean
    scheme_user: boolean
}

