export var GeneralEvents;
(function (GeneralEvents) {
    GeneralEvents["DEBUG"] = "debug";
    GeneralEvents["ERROR"] = "error";
    GeneralEvents["WARN"] = "warn";
    GeneralEvents["INFO"] = "info";
    GeneralEvents["USER_ERROR"] = "user-error";
})(GeneralEvents || (GeneralEvents = {}));
export var DiscordEvents;
(function (DiscordEvents) {
    DiscordEvents["APPLICATION_COMMAND_PERMISSIONS_UPDATE"] = "applicationCommandPermissionsUpdate";
    DiscordEvents["AUTO_MODERATION_ACTION_EXECUTION"] = "autoModerationActionExecution";
    DiscordEvents["AUTO_MODERATION_RULE_CREATE"] = "autoModerationRuleCreate";
    DiscordEvents["AUTO_MODERATION_RULE_DELETE"] = "autoModerationRuleDelete";
    DiscordEvents["AUTO_MODERATION_RULE_UPDATE"] = "autoModerationRuleUpdate";
    DiscordEvents["CHANNEL_CREATE"] = "channelCreate";
    DiscordEvents["CHANNEL_DELETE"] = "channelDelete";
    DiscordEvents["CHANNEL_PINS_UPDATE"] = "channelPinsUpdate";
    DiscordEvents["CHANNEL_UPDATE"] = "channelUpdate";
    DiscordEvents["EMOJI_CREATE"] = "emojiCreate";
    DiscordEvents["EMOJI_DELETE"] = "emojiDelete";
    DiscordEvents["EMOJI_UPDATE"] = "emojiUpdate";
    DiscordEvents["GUILD_BAN_ADD"] = "guildBanAdd";
    DiscordEvents["GUILD_BAN_REMOVE"] = "guildBanRemove";
    DiscordEvents["GUILD_CREATE"] = "guildCreate";
    DiscordEvents["GUILD_DELETE"] = "guildDelete";
    DiscordEvents["GUILD_INTEGRATIONS_UPDATE"] = "guildIntegrationsUpdate";
    DiscordEvents["GUILD_MEMBER_ADD"] = "guildMemberAdd";
    DiscordEvents["GUILD_MEMBER_AVAILABLE"] = "guildMemberAvailable";
    DiscordEvents["GUILD_MEMBER_REMOVE"] = "guildMemberRemove";
    DiscordEvents["GUILD_MEMBERS_CHUNK"] = "guildMembersChunk";
    DiscordEvents["GUILD_MEMBER_UPDATE"] = "guildMemberUpdate";
    DiscordEvents["GUILD_SCHEDULED_EVENT_CREATE"] = "guildScheduledEventCreate";
    DiscordEvents["GUILD_SCHEDULED_EVENT_DELETE"] = "guildScheduledEventDelete";
    DiscordEvents["GUILD_SCHEDULED_EVENT_UPDATE"] = "guildScheduledEventUpdate";
    DiscordEvents["GUILD_SCHEDULED_EVENT_USER_ADD"] = "guildScheduledEventUserAdd";
    DiscordEvents["GUILD_SCHEDULED_EVENT_USER_REMOVE"] = "guildScheduledEventUserRemove";
    DiscordEvents["GUILD_UNAVAILABLE"] = "guildUnavailable";
    DiscordEvents["GUILD_UPDATE"] = "guildUpdate";
    DiscordEvents["INTERACTION_CREATE"] = "interactionCreate";
    DiscordEvents["INVITE_CREATE"] = "inviteCreate";
    DiscordEvents["INVITE_DELETE"] = "inviteDelete";
    DiscordEvents["MESSAGE_CREATE"] = "messageCreate";
    DiscordEvents["MESSAGE_DELETE"] = "messageDelete";
    DiscordEvents["MESSAGE_DELETE_BULK"] = "messageDeleteBulk";
    DiscordEvents["MESSAGE_REACTION_ADD"] = "messageReactionAdd";
    DiscordEvents["MESSAGE_REACTION_REMOVE"] = "messageReactionRemove";
    DiscordEvents["MESSAGE_REACTION_REMOVE_ALL"] = "messageReactionRemoveAll";
    DiscordEvents["MESSAGE_REACTION_REMOVE_EMOJI"] = "messageReactionRemoveEmoji";
    DiscordEvents["MESSAGE_UPDATE"] = "messageUpdate";
    DiscordEvents["PRESENCE_UPDATE"] = "presenceUpdate";
    DiscordEvents["READY"] = "ready";
    DiscordEvents["ROLE_CREATE"] = "roleCreate";
    DiscordEvents["ROLE_DELETE"] = "roleDelete";
    DiscordEvents["ROLE_UPDATE"] = "roleUpdate";
    DiscordEvents["SHARD_DISCONNECT"] = "shardDisconnect";
    DiscordEvents["SHARD_ERROR"] = "shardError";
    DiscordEvents["SHARD_READY"] = "shardReady";
    DiscordEvents["SHARD_RECONNECTING"] = "shardReconnecting";
    DiscordEvents["SHARD_RESUME"] = "shardResume";
    DiscordEvents["STAGE_INSTANCE_CREATE"] = "stageInstanceCreate";
    DiscordEvents["STAGE_INSTANCE_DELETE"] = "stageInstanceDelete";
    DiscordEvents["STAGE_INSTANCE_UPDATE"] = "stageInstanceUpdate";
    DiscordEvents["STICKER_CREATE"] = "stickerCreate";
    DiscordEvents["STICKER_DELETE"] = "stickerDelete";
    DiscordEvents["STICKER_UPDATE"] = "stickerUpdate";
    DiscordEvents["THREAD_CREATE"] = "threadCreate";
    DiscordEvents["THREAD_DELETE"] = "threadDelete";
    DiscordEvents["THREAD_LIST_SYNC"] = "threadListSync";
    DiscordEvents["THREAD_MEMBERS_UPDATE"] = "threadMembersUpdate";
    DiscordEvents["THREAD_MEMBER_UPDATE"] = "threadMemberUpdate";
    DiscordEvents["THREAD_UPDATE"] = "threadUpdate";
    DiscordEvents["TYPING_START"] = "typingStart";
    DiscordEvents["USER_UPDATE"] = "userUpdate";
    DiscordEvents["VOICE_STATE_UPDATE"] = "voiceStateUpdate";
    DiscordEvents["WEBHOOKS_UPDATE"] = "webhooksUpdate";
})(DiscordEvents || (DiscordEvents = {}));
