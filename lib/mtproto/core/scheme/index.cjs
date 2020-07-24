const schema = {
  "constructorsById": {
    "4883767": {
      "id": 4883767,
      "predicate": "securePasswordKdfAlgoUnknown",
      "params": [],
      "type": "SecurePasswordKdfAlgo"
    },
    "8322574": {
      "id": 8322574,
      "predicate": "storage.fileJpeg",
      "params": [],
      "type": "storage.FileType"
    },
    "9203775": {
      "id": 9203775,
      "predicate": "userStatusOffline",
      "params": [
        {
          "name": "was_online",
          "type": "int"
        }
      ],
      "type": "UserStatus"
    },
    "12467706": {
      "id": 12467706,
      "predicate": "secureValueErrorFrontSide",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    "16030880": {
      "id": 16030880,
      "predicate": "updates.difference",
      "params": [
        {
          "name": "new_messages",
          "type": "Vector<Message>"
        },
        {
          "name": "new_encrypted_messages",
          "type": "Vector<EncryptedMessage>"
        },
        {
          "name": "other_updates",
          "type": "Vector<Update>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "state",
          "type": "updates.State"
        }
      ],
      "type": "updates.Difference"
    },
    "32192344": {
      "id": 32192344,
      "predicate": "help.userInfo",
      "params": [
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        },
        {
          "name": "author",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "help.UserInfo"
    },
    "34469328": {
      "id": 34469328,
      "predicate": "messageEntityBlockquote",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "41187252": {
      "id": 41187252,
      "predicate": "secureRequiredTypeOneOf",
      "params": [
        {
          "name": "types",
          "type": "Vector<SecureRequiredType>"
        }
      ],
      "type": "SecureRequiredType"
    },
    "42402760": {
      "id": 42402760,
      "predicate": "inputStickerSetAnimatedEmoji",
      "params": [],
      "type": "InputStickerSet"
    },
    "42930452": {
      "id": 42930452,
      "predicate": "theme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "default",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "document",
          "type": "flags.2?Document"
        },
        {
          "name": "settings",
          "type": "flags.3?ThemeSettings"
        },
        {
          "name": "installs_count",
          "type": "int"
        }
      ],
      "type": "Theme"
    },
    "43446532": {
      "id": 43446532,
      "predicate": "geoPoint",
      "params": [
        {
          "name": "long",
          "type": "double"
        },
        {
          "name": "lat",
          "type": "double"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "GeoPoint"
    },
    "52401552": {
      "id": 52401552,
      "predicate": "pageBlockSlideshow",
      "params": [
        {
          "name": "items",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    "53231223": {
      "id": 53231223,
      "predicate": "inputGameID",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputGame"
    },
    "55281185": {
      "id": 55281185,
      "predicate": "textMarked",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    "55761658": {
      "id": 55761658,
      "predicate": "inputPrivacyKeyPhoneNumber",
      "params": [],
      "type": "InputPrivacyKey"
    },
    "70813275": {
      "id": 70813275,
      "predicate": "inputStickeredMediaDocument",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        }
      ],
      "type": "InputStickeredMedia"
    },
    "81704317": {
      "id": 81704317,
      "predicate": "msgs_state_info",
      "params": [
        {
          "name": "req_msg_id",
          "type": "long"
        },
        {
          "name": "info",
          "type": "bytes"
        }
      ],
      "type": "MsgsStateInfo"
    },
    "84438264": {
      "id": 84438264,
      "predicate": "wallPaperSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "blur",
          "type": "flags.1?true"
        },
        {
          "name": "motion",
          "type": "flags.2?true"
        },
        {
          "name": "background_color",
          "type": "flags.0?int"
        },
        {
          "name": "second_background_color",
          "type": "flags.4?int"
        },
        {
          "name": "intensity",
          "type": "flags.3?int"
        },
        {
          "name": "rotation",
          "type": "flags.4?int"
        }
      ],
      "type": "WallPaperSettings"
    },
    "85337187": {
      "id": 85337187,
      "predicate": "resPQ",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "pq",
          "type": "bytes"
        },
        {
          "name": "server_public_key_fingerprints",
          "type": "Vector<long>"
        }
      ],
      "type": "ResPQ"
    },
    "90744648": {
      "id": 90744648,
      "predicate": "keyboardButtonSwitchInline",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "same_peer",
          "type": "flags.0?true"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "query",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    "104314861": {
      "id": 104314861,
      "predicate": "topPeerCategoryCorrespondents",
      "params": [],
      "type": "TopPeerCategory"
    },
    "106343499": {
      "id": 106343499,
      "predicate": "channelParticipantsSearch",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    "110008598": {
      "id": 110008598,
      "predicate": "auth.loginTokenMigrateTo",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "token",
          "type": "bytes"
        }
      ],
      "type": "auth.LoginToken"
    },
    "115615172": {
      "id": 115615172,
      "predicate": "secureValueTypeDriverLicense",
      "params": [],
      "type": "SecureValueType"
    },
    "120753115": {
      "id": 120753115,
      "predicate": "chatForbidden",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Chat"
    },
    "125178264": {
      "id": 125178264,
      "predicate": "updateChatParticipants",
      "params": [
        {
          "name": "participants",
          "type": "ChatParticipants"
        }
      ],
      "type": "Update"
    },
    "129960444": {
      "id": 129960444,
      "predicate": "userStatusLastWeek",
      "params": [],
      "type": "UserStatus"
    },
    "136105807": {
      "id": 136105807,
      "predicate": "textImage",
      "params": [
        {
          "name": "document_id",
          "type": "long"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "RichText"
    },
    "136574537": {
      "id": 136574537,
      "predicate": "messages.votesList",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "votes",
          "type": "Vector<MessageUserVote>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "next_offset",
          "type": "flags.0?string"
        }
      ],
      "type": "messages.VotesList"
    },
    "155834844": {
      "id": 155834844,
      "predicate": "future_salt",
      "params": [
        {
          "name": "valid_since",
          "type": "int"
        },
        {
          "name": "valid_until",
          "type": "int"
        },
        {
          "name": "salt",
          "type": "long"
        }
      ],
      "type": "FutureSalt"
    },
    "157948117": {
      "id": 157948117,
      "predicate": "upload.file",
      "params": [
        {
          "name": "type",
          "type": "storage.FileType"
        },
        {
          "name": "mtime",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "upload.File"
    },
    "164646985": {
      "id": 164646985,
      "predicate": "userStatusEmpty",
      "params": [],
      "type": "UserStatus"
    },
    "172975040": {
      "id": 172975040,
      "predicate": "storage.filePng",
      "params": [],
      "type": "storage.FileType"
    },
    "178201177": {
      "id": 178201177,
      "predicate": "destroy_auth_key_none",
      "params": [],
      "type": "DestroyAuthKeyRes"
    },
    "178373535": {
      "id": 178373535,
      "predicate": "inputPaymentCredentialsApplePay",
      "params": [
        {
          "name": "payment_data",
          "type": "DataJSON"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    "182649427": {
      "id": 182649427,
      "predicate": "messageRange",
      "params": [
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "MessageRange"
    },
    "186120336": {
      "id": 186120336,
      "predicate": "messages.recentStickersNotModified",
      "params": [],
      "type": "messages.RecentStickers"
    },
    "195371015": {
      "id": 195371015,
      "predicate": "inputPrivacyValueDisallowContacts",
      "params": [],
      "type": "InputPrivacyRule"
    },
    "196268545": {
      "id": 196268545,
      "predicate": "updateStickerSetsOrder",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "order",
          "type": "Vector<long>"
        }
      ],
      "type": "Update"
    },
    "209668535": {
      "id": 209668535,
      "predicate": "privacyValueDisallowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector<int>"
        }
      ],
      "type": "PrivacyRule"
    },
    "218751099": {
      "id": 218751099,
      "predicate": "inputPrivacyValueAllowContacts",
      "params": [],
      "type": "InputPrivacyRule"
    },
    "223655517": {
      "id": 223655517,
      "predicate": "messages.foundStickerSetsNotModified",
      "params": [],
      "type": "messages.FoundStickerSets"
    },
    "230353641": {
      "id": 230353641,
      "predicate": "inputStickerSetThumb",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        }
      ],
      "type": "InputFileLocation"
    },
    "235081943": {
      "id": 235081943,
      "predicate": "help.recentMeUrls",
      "params": [
        {
          "name": "urls",
          "type": "Vector<RecentMeUrl>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "help.RecentMeUrls"
    },
    "236446268": {
      "id": 236446268,
      "predicate": "photoSizeEmpty",
      "params": [
        {
          "name": "type",
          "type": "string"
        }
      ],
      "type": "PhotoSize"
    },
    "239663460": {
      "id": 239663460,
      "predicate": "updateBotInlineSend",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "geo",
          "type": "flags.0?GeoPoint"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "msg_id",
          "type": "flags.1?InputBotInlineMessageID"
        }
      ],
      "type": "Update"
    },
    "241923758": {
      "id": 241923758,
      "predicate": "channelAdminLogEventActionChangeLocation",
      "params": [
        {
          "name": "prev_value",
          "type": "ChannelLocation"
        },
        {
          "name": "new_value",
          "type": "ChannelLocation"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "244310238": {
      "id": 244310238,
      "predicate": "messageUserVoteMultiple",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "options",
          "type": "Vector<bytes>"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "MessageUserVote"
    },
    "250621158": {
      "id": 250621158,
      "predicate": "documentAttributeVideo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "round_message",
          "type": "flags.0?true"
        },
        {
          "name": "supports_streaming",
          "type": "flags.1?true"
        },
        {
          "name": "duration",
          "type": "int"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "DocumentAttribute"
    },
    "261416433": {
      "id": 261416433,
      "predicate": "inputMediaPoll",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "poll",
          "type": "Poll"
        },
        {
          "name": "correct_answers",
          "type": "flags.0?Vector<bytes>"
        },
        {
          "name": "solution",
          "type": "flags.1?string"
        },
        {
          "name": "solution_entities",
          "type": "flags.1?Vector<MessageEntity>"
        }
      ],
      "type": "InputMedia"
    },
    "276907596": {
      "id": 276907596,
      "predicate": "storage.fileWebp",
      "params": [],
      "type": "storage.FileType"
    },
    "280464681": {
      "id": 280464681,
      "predicate": "keyboardButtonUrlAuth",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "fwd_text",
          "type": "flags.0?string"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "button_id",
          "type": "int"
        }
      ],
      "type": "KeyboardButton"
    },
    "286776671": {
      "id": 286776671,
      "predicate": "geoPointEmpty",
      "params": [],
      "type": "GeoPoint"
    },
    "289586518": {
      "id": 289586518,
      "predicate": "savedPhoneContact",
      "params": [
        {
          "name": "phone",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "SavedContact"
    },
    "295067450": {
      "id": 295067450,
      "predicate": "botInlineResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "description",
          "type": "flags.2?string"
        },
        {
          "name": "url",
          "type": "flags.3?string"
        },
        {
          "name": "thumb",
          "type": "flags.4?WebDocument"
        },
        {
          "name": "content",
          "type": "flags.5?WebDocument"
        },
        {
          "name": "send_message",
          "type": "BotInlineMessage"
        }
      ],
      "type": "BotInlineResult"
    },
    "297109817": {
      "id": 297109817,
      "predicate": "documentAttributeAnimated",
      "params": [],
      "type": "DocumentAttribute"
    },
    "301019932": {
      "id": 301019932,
      "predicate": "updateShortSentMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "media",
          "type": "flags.9?MessageMedia"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector<MessageEntity>"
        }
      ],
      "type": "Updates"
    },
    "307276766": {
      "id": 307276766,
      "predicate": "account.authorizations",
      "params": [
        {
          "name": "authorizations",
          "type": "Vector<Authorization>"
        }
      ],
      "type": "account.Authorizations"
    },
    "313694676": {
      "id": 313694676,
      "predicate": "stickerPack",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        },
        {
          "name": "documents",
          "type": "Vector<long>"
        }
      ],
      "type": "StickerPack"
    },
    "314130811": {
      "id": 314130811,
      "predicate": "updateUserPhone",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    "314359194": {
      "id": 314359194,
      "predicate": "updateNewEncryptedMessage",
      "params": [
        {
          "name": "message",
          "type": "EncryptedMessage"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "320652927": {
      "id": 320652927,
      "predicate": "inputPrivacyValueAllowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "InputPrivacyRule"
    },
    "324435594": {
      "id": 324435594,
      "predicate": "pageBlockUnsupported",
      "params": [],
      "type": "PageBlock"
    },
    "326715557": {
      "id": 326715557,
      "predicate": "auth.passwordRecovery",
      "params": [
        {
          "name": "email_pattern",
          "type": "string"
        }
      ],
      "type": "auth.PasswordRecovery"
    },
    "332848423": {
      "id": 332848423,
      "predicate": "encryptedChatDiscarded",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "EncryptedChat"
    },
    "338142689": {
      "id": 338142689,
      "predicate": "channelParticipantsBanned",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    "344356834": {
      "id": 344356834,
      "predicate": "topPeerCategoryBotsInline",
      "params": [],
      "type": "TopPeerCategory"
    },
    "352657236": {
      "id": 352657236,
      "predicate": "photos.photosSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "photos",
          "type": "Vector<Photo>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "photos.Photos"
    },
    "354925740": {
      "id": 354925740,
      "predicate": "secureSecretSettings",
      "params": [
        {
          "name": "secure_algo",
          "type": "SecurePasswordKdfAlgo"
        },
        {
          "name": "secure_secret",
          "type": "bytes"
        },
        {
          "name": "secure_secret_id",
          "type": "long"
        }
      ],
      "type": "SecureSecretSettings"
    },
    "358154344": {
      "id": 358154344,
      "predicate": "documentAttributeFilename",
      "params": [
        {
          "name": "file_name",
          "type": "string"
        }
      ],
      "type": "DocumentAttribute"
    },
    "364538944": {
      "id": 364538944,
      "predicate": "messages.dialogs",
      "params": [
        {
          "name": "dialogs",
          "type": "Vector<Dialog>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Dialogs"
    },
    "367766557": {
      "id": 367766557,
      "predicate": "channelParticipant",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChannelParticipant"
    },
    "370236054": {
      "id": 370236054,
      "predicate": "pageBlockRelatedArticles",
      "params": [
        {
          "name": "title",
          "type": "RichText"
        },
        {
          "name": "articles",
          "type": "Vector<PageRelatedArticle>"
        }
      ],
      "type": "PageBlock"
    },
    "371037736": {
      "id": 371037736,
      "predicate": "topPeerCategoryChannels",
      "params": [],
      "type": "TopPeerCategory"
    },
    "372165663": {
      "id": 372165663,
      "predicate": "foundGif",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "thumb_url",
          "type": "string"
        },
        {
          "name": "content_url",
          "type": "string"
        },
        {
          "name": "content_type",
          "type": "string"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "FoundGif"
    },
    "377562760": {
      "id": 377562760,
      "predicate": "updateShortChatMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "int"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "fwd_from",
          "type": "flags.2?MessageFwdHeader"
        },
        {
          "name": "via_bot_id",
          "type": "flags.11?int"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.3?int"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector<MessageEntity>"
        }
      ],
      "type": "Updates"
    },
    "381645902": {
      "id": 381645902,
      "predicate": "sendMessageTypingAction",
      "params": [],
      "type": "SendMessageAction"
    },
    "386986326": {
      "id": 386986326,
      "predicate": "updateEncryptedChatTyping",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "391759200": {
      "id": 391759200,
      "predicate": "pageBlockPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "photo_id",
          "type": "long"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        },
        {
          "name": "url",
          "type": "flags.0?string"
        },
        {
          "name": "webpage_id",
          "type": "flags.0?long"
        }
      ],
      "type": "PageBlock"
    },
    "393186209": {
      "id": 393186209,
      "predicate": "sendMessageGeoLocationAction",
      "params": [],
      "type": "SendMessageAction"
    },
    "396093539": {
      "id": 396093539,
      "predicate": "inputPeerChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "InputPeer"
    },
    "398123750": {
      "id": 398123750,
      "predicate": "inputPeerUserFromMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "InputPeer"
    },
    "398898678": {
      "id": 398898678,
      "predicate": "help.support",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "user",
          "type": "User"
        }
      ],
      "type": "help.Support"
    },
    "400266251": {
      "id": 400266251,
      "predicate": "botInlineMediaResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?Photo"
        },
        {
          "name": "document",
          "type": "flags.1?Document"
        },
        {
          "name": "title",
          "type": "flags.2?string"
        },
        {
          "name": "description",
          "type": "flags.3?string"
        },
        {
          "name": "send_message",
          "type": "BotInlineMessage"
        }
      ],
      "type": "BotInlineResult"
    },
    "405815507": {
      "id": 405815507,
      "predicate": "channelAdminLogEventActionParticipantJoin",
      "params": [],
      "type": "ChannelAdminLogEventAction"
    },
    "406307684": {
      "id": 406307684,
      "predicate": "inputEncryptedFileEmpty",
      "params": [],
      "type": "InputEncryptedFile"
    },
    "407582158": {
      "id": 407582158,
      "predicate": "inputPrivacyValueAllowAll",
      "params": [],
      "type": "InputPrivacyRule"
    },
    "411017418": {
      "id": 411017418,
      "predicate": "secureValue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "data",
          "type": "flags.0?SecureData"
        },
        {
          "name": "front_side",
          "type": "flags.1?SecureFile"
        },
        {
          "name": "reverse_side",
          "type": "flags.2?SecureFile"
        },
        {
          "name": "selfie",
          "type": "flags.3?SecureFile"
        },
        {
          "name": "translation",
          "type": "flags.6?Vector<SecureFile>"
        },
        {
          "name": "files",
          "type": "flags.4?Vector<SecureFile>"
        },
        {
          "name": "plain_data",
          "type": "flags.5?SecurePlainData"
        },
        {
          "name": "hash",
          "type": "bytes"
        }
      ],
      "type": "SecureValue"
    },
    "414687501": {
      "id": 414687501,
      "predicate": "dcOption",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "ipv6",
          "type": "flags.0?true"
        },
        {
          "name": "media_only",
          "type": "flags.1?true"
        },
        {
          "name": "tcpo_only",
          "type": "flags.2?true"
        },
        {
          "name": "cdn",
          "type": "flags.3?true"
        },
        {
          "name": "static",
          "type": "flags.4?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "ip_address",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        },
        {
          "name": "secret",
          "type": "flags.10?bytes"
        }
      ],
      "type": "DcOption"
    },
    "415136107": {
      "id": 415136107,
      "predicate": "privacyValueAllowChatParticipants",
      "params": [
        {
          "name": "chats",
          "type": "Vector<int>"
        }
      ],
      "type": "PrivacyRule"
    },
    "415997816": {
      "id": 415997816,
      "predicate": "help.inviteText",
      "params": [
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "help.InviteText"
    },
    "416402882": {
      "id": 416402882,
      "predicate": "botInlineMessageMediaContact",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    "422972864": {
      "id": 422972864,
      "predicate": "updateFolderPeers",
      "params": [
        {
          "name": "folder_peers",
          "type": "Vector<FolderPeer>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "423314455": {
      "id": 423314455,
      "predicate": "inputNotifyUsers",
      "params": [],
      "type": "InputNotifyPeer"
    },
    "448771445": {
      "id": 448771445,
      "predicate": "inputDocument",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        }
      ],
      "type": "InputDocument"
    },
    "453805082": {
      "id": 453805082,
      "predicate": "draftMessageEmpty",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "date",
          "type": "flags.0?int"
        }
      ],
      "type": "DraftMessage"
    },
    "455635795": {
      "id": 455635795,
      "predicate": "messageActionSecureValuesSentMe",
      "params": [
        {
          "name": "values",
          "type": "Vector<SecureValue>"
        },
        {
          "name": "credentials",
          "type": "SecureCredentialsEncrypted"
        }
      ],
      "type": "MessageAction"
    },
    "457133559": {
      "id": 457133559,
      "predicate": "updateEditChannelMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "460916654": {
      "id": 460916654,
      "predicate": "channelAdminLogEventActionToggleInvites",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "461151667": {
      "id": 461151667,
      "predicate": "chatFull",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_set_username",
          "type": "flags.7?true"
        },
        {
          "name": "has_scheduled",
          "type": "flags.8?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "participants",
          "type": "ChatParticipants"
        },
        {
          "name": "chat_photo",
          "type": "flags.2?Photo"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "exported_invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "bot_info",
          "type": "flags.3?Vector<BotInfo>"
        },
        {
          "name": "pinned_msg_id",
          "type": "flags.6?int"
        },
        {
          "name": "folder_id",
          "type": "flags.11?int"
        }
      ],
      "type": "ChatFull"
    },
    "462375633": {
      "id": 462375633,
      "predicate": "phoneCallWaiting",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        },
        {
          "name": "receive_date",
          "type": "flags.0?int"
        }
      ],
      "type": "PhoneCall"
    },
    "469489699": {
      "id": 469489699,
      "predicate": "updateUserStatus",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "status",
          "type": "UserStatus"
        }
      ],
      "type": "Update"
    },
    "470789295": {
      "id": 470789295,
      "predicate": "channelParticipantBanned",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "left",
          "type": "flags.0?true"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "kicked_by",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "ChannelParticipant"
    },
    "471043349": {
      "id": 471043349,
      "predicate": "contacts.blocked",
      "params": [
        {
          "name": "blocked",
          "type": "Vector<ContactBlocked>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.Blocked"
    },
    "471437699": {
      "id": 471437699,
      "predicate": "account.wallPapersNotModified",
      "params": [],
      "type": "account.WallPapers"
    },
    "475467473": {
      "id": 475467473,
      "predicate": "webDocument",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        }
      ],
      "type": "WebDocument"
    },
    "480546647": {
      "id": 480546647,
      "predicate": "inputChatPhotoEmpty",
      "params": [],
      "type": "InputChatPhoto"
    },
    "481674261": {
      "id": 481674261,
      "predicate": "vector",
      "params": [],
      "type": "Vector t"
    },
    "482797855": {
      "id": 482797855,
      "predicate": "inputSingleMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "media",
          "type": "InputMedia"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.0?Vector<MessageEntity>"
        }
      ],
      "type": "InputSingleMedia"
    },
    "483104362": {
      "id": 483104362,
      "predicate": "textPhone",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    "483901197": {
      "id": 483901197,
      "predicate": "inputPhotoEmpty",
      "params": [],
      "type": "InputPhoto"
    },
    "488313413": {
      "id": 488313413,
      "predicate": "inputAppEvent",
      "params": [
        {
          "name": "time",
          "type": "double"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "peer",
          "type": "long"
        },
        {
          "name": "data",
          "type": "JSONValue"
        }
      ],
      "type": "InputAppEvent"
    },
    "497489295": {
      "id": 497489295,
      "predicate": "help.appUpdate",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_not_skip",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "version",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        },
        {
          "name": "document",
          "type": "flags.1?Document"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        }
      ],
      "type": "help.AppUpdate"
    },
    "504660880": {
      "id": 504660880,
      "predicate": "pageBlockKicker",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    "505595789": {
      "id": 505595789,
      "predicate": "inputReportReasonViolence",
      "params": [],
      "type": "ReportReason"
    },
    "505969924": {
      "id": 505969924,
      "predicate": "inputMediaUploadedPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "stickers",
          "type": "flags.0?Vector<InputDocument>"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.1?int"
        }
      ],
      "type": "InputMedia"
    },
    "506920429": {
      "id": 506920429,
      "predicate": "inputPhoneCall",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputPhoneCall"
    },
    "511092620": {
      "id": 511092620,
      "predicate": "topPeerCategoryPhoneCalls",
      "params": [],
      "type": "TopPeerCategory"
    },
    "512535275": {
      "id": 512535275,
      "predicate": "postAddress",
      "params": [
        {
          "name": "street_line1",
          "type": "string"
        },
        {
          "name": "street_line2",
          "type": "string"
        },
        {
          "name": "city",
          "type": "string"
        },
        {
          "name": "state",
          "type": "string"
        },
        {
          "name": "country_iso2",
          "type": "string"
        },
        {
          "name": "post_code",
          "type": "string"
        }
      ],
      "type": "PostAddress"
    },
    "522914557": {
      "id": 522914557,
      "predicate": "updateNewMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "537022650": {
      "id": 537022650,
      "predicate": "userEmpty",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "User"
    },
    "539045032": {
      "id": 539045032,
      "predicate": "photos.photo",
      "params": [
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "photos.Photo"
    },
    "543450958": {
      "id": 543450958,
      "predicate": "updates.channelDifference",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "final",
          "type": "flags.0?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "timeout",
          "type": "flags.1?int"
        },
        {
          "name": "new_messages",
          "type": "Vector<Message>"
        },
        {
          "name": "other_updates",
          "type": "Vector<Update>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    "546203849": {
      "id": 546203849,
      "predicate": "inputMessageEntityMentionName",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "MessageEntity"
    },
    "547062491": {
      "id": 547062491,
      "predicate": "channelLocation",
      "params": [
        {
          "name": "geo_point",
          "type": "GeoPoint"
        },
        {
          "name": "address",
          "type": "string"
        }
      ],
      "type": "ChannelLocation"
    },
    "548253432": {
      "id": 548253432,
      "predicate": "inputPeerChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputPeer"
    },
    "558156313": {
      "id": 558156313,
      "predicate": "rpc_error",
      "params": [
        {
          "name": "error_code",
          "type": "int"
        },
        {
          "name": "error_message",
          "type": "string"
        }
      ],
      "type": "RpcError"
    },
    "568808380": {
      "id": 568808380,
      "predicate": "upload.webFile",
      "params": [
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "file_type",
          "type": "storage.FileType"
        },
        {
          "name": "mtime",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "upload.WebFile"
    },
    "569137759": {
      "id": 569137759,
      "predicate": "securePlainEmail",
      "params": [
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "SecurePlainData"
    },
    "577556219": {
      "id": 577556219,
      "predicate": "auth.codeTypeFlashCall",
      "params": [],
      "type": "auth.CodeType"
    },
    "586395571": {
      "id": 586395571,
      "predicate": "messages.recentStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "packs",
          "type": "Vector<StickerPack>"
        },
        {
          "name": "stickers",
          "type": "Vector<Document>"
        },
        {
          "name": "dates",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.RecentStickers"
    },
    "590459437": {
      "id": 590459437,
      "predicate": "photoEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "Photo"
    },
    "594408994": {
      "id": 594408994,
      "predicate": "emojiKeywordDeleted",
      "params": [
        {
          "name": "keyword",
          "type": "string"
        },
        {
          "name": "emoticons",
          "type": "Vector<string>"
        }
      ],
      "type": "EmojiKeyword"
    },
    "594758406": {
      "id": 594758406,
      "predicate": "encryptedMessageService",
      "params": [
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "EncryptedMessage"
    },
    "598418386": {
      "id": 598418386,
      "predicate": "inputMediaDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    "608050278": {
      "id": 608050278,
      "predicate": "sendMessageUploadRoundAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    "629866245": {
      "id": 629866245,
      "predicate": "keyboardButtonUrl",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    "634833351": {
      "id": 634833351,
      "predicate": "updateReadChannelOutbox",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "635466748": {
      "id": 635466748,
      "predicate": "pageListItemBlocks",
      "params": [
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        }
      ],
      "type": "PageListItem"
    },
    "641563686": {
      "id": 641563686,
      "predicate": "pageBlockBlockquote",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "caption",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    "648939889": {
      "id": 648939889,
      "predicate": "channelAdminLogEventActionToggleSignatures",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "649453030": {
      "id": 649453030,
      "predicate": "messages.messageEditData",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "caption",
          "type": "flags.0?true"
        }
      ],
      "type": "messages.MessageEditData"
    },
    "654302845": {
      "id": 654302845,
      "predicate": "updateDialogFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "filter",
          "type": "flags.0?DialogFilter"
        }
      ],
      "type": "Update"
    },
    "661470918": {
      "id": 661470918,
      "predicate": "msg_detailed_info",
      "params": [
        {
          "name": "msg_id",
          "type": "long"
        },
        {
          "name": "answer_msg_id",
          "type": "long"
        },
        {
          "name": "bytes",
          "type": "int"
        },
        {
          "name": "status",
          "type": "int"
        }
      ],
      "type": "MsgDetailedInfo"
    },
    "668375447": {
      "id": 668375447,
      "predicate": "inputPeerPhotoFileLocation",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "big",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        }
      ],
      "type": "InputFileLocation"
    },
    "681420594": {
      "id": 681420594,
      "predicate": "channelForbidden",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "broadcast",
          "type": "flags.5?true"
        },
        {
          "name": "megagroup",
          "type": "flags.8?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "until_date",
          "type": "flags.16?int"
        }
      ],
      "type": "Chat"
    },
    "681706865": {
      "id": 681706865,
      "predicate": "messageEntityCode",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "686618977": {
      "id": 686618977,
      "predicate": "help.termsOfServiceUpdate",
      "params": [
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "terms_of_service",
          "type": "help.TermsOfService"
        }
      ],
      "type": "help.TermsOfServiceUpdate"
    },
    "695856818": {
      "id": 695856818,
      "predicate": "langPackStringDeleted",
      "params": [
        {
          "name": "key",
          "type": "string"
        }
      ],
      "type": "LangPackString"
    },
    "700340377": {
      "id": 700340377,
      "predicate": "inputTakeoutFileLocation",
      "params": [],
      "type": "InputFileLocation"
    },
    "707290417": {
      "id": 707290417,
      "predicate": "inputChannelFromMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "InputChannel"
    },
    "736157604": {
      "id": 736157604,
      "predicate": "jsonNumber",
      "params": [
        {
          "name": "value",
          "type": "double"
        }
      ],
      "type": "JSONValue"
    },
    "739712882": {
      "id": 739712882,
      "predicate": "dialog",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.2?true"
        },
        {
          "name": "unread_mark",
          "type": "flags.3?true"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "top_message",
          "type": "int"
        },
        {
          "name": "read_inbox_max_id",
          "type": "int"
        },
        {
          "name": "read_outbox_max_id",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        },
        {
          "name": "unread_mentions_count",
          "type": "int"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "pts",
          "type": "flags.0?int"
        },
        {
          "name": "draft",
          "type": "flags.1?DraftMessage"
        },
        {
          "name": "folder_id",
          "type": "flags.4?int"
        }
      ],
      "type": "Dialog"
    },
    "740433629": {
      "id": 740433629,
      "predicate": "messages.dhConfig",
      "params": [
        {
          "name": "g",
          "type": "int"
        },
        {
          "name": "p",
          "type": "bytes"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "random",
          "type": "bytes"
        }
      ],
      "type": "messages.DhConfig"
    },
    "756118935": {
      "id": 756118935,
      "predicate": "inputUserFromMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "InputUser"
    },
    "767652808": {
      "id": 767652808,
      "predicate": "inputEncryptedFileBigUploaded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "key_fingerprint",
          "type": "int"
        }
      ],
      "type": "InputEncryptedFile"
    },
    "771095562": {
      "id": 771095562,
      "predicate": "channelAdminLogEventActionDefaultBannedRights",
      "params": [
        {
          "name": "prev_banned_rights",
          "type": "ChatBannedRights"
        },
        {
          "name": "new_banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "772213157": {
      "id": 772213157,
      "predicate": "messages.savedGifs",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "gifs",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.SavedGifs"
    },
    "777640226": {
      "id": 777640226,
      "predicate": "inputReportReasonPornography",
      "params": [],
      "type": "ReportReason"
    },
    "784356159": {
      "id": 784356159,
      "predicate": "messageMediaVenue",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        }
      ],
      "type": "MessageMedia"
    },
    "791617983": {
      "id": 791617983,
      "predicate": "updateReadHistoryOutbox",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "812830625": {
      "id": 812830625,
      "predicate": "gzip_packed",
      "params": [
        {
          "name": "packed_data",
          "type": "bytes"
        }
      ],
      "type": "Object"
    },
    "856375399": {
      "id": 856375399,
      "predicate": "config",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phonecalls_enabled",
          "type": "flags.1?true"
        },
        {
          "name": "default_p2p_contacts",
          "type": "flags.3?true"
        },
        {
          "name": "preload_featured_stickers",
          "type": "flags.4?true"
        },
        {
          "name": "ignore_phone_entities",
          "type": "flags.5?true"
        },
        {
          "name": "revoke_pm_inbox",
          "type": "flags.6?true"
        },
        {
          "name": "blocked_mode",
          "type": "flags.8?true"
        },
        {
          "name": "pfs_enabled",
          "type": "flags.13?true"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "test_mode",
          "type": "Bool"
        },
        {
          "name": "this_dc",
          "type": "int"
        },
        {
          "name": "dc_options",
          "type": "Vector<DcOption>"
        },
        {
          "name": "dc_txt_domain_name",
          "type": "string"
        },
        {
          "name": "chat_size_max",
          "type": "int"
        },
        {
          "name": "megagroup_size_max",
          "type": "int"
        },
        {
          "name": "forwarded_count_max",
          "type": "int"
        },
        {
          "name": "online_update_period_ms",
          "type": "int"
        },
        {
          "name": "offline_blur_timeout_ms",
          "type": "int"
        },
        {
          "name": "offline_idle_timeout_ms",
          "type": "int"
        },
        {
          "name": "online_cloud_timeout_ms",
          "type": "int"
        },
        {
          "name": "notify_cloud_delay_ms",
          "type": "int"
        },
        {
          "name": "notify_default_delay_ms",
          "type": "int"
        },
        {
          "name": "push_chat_period_ms",
          "type": "int"
        },
        {
          "name": "push_chat_limit",
          "type": "int"
        },
        {
          "name": "saved_gifs_limit",
          "type": "int"
        },
        {
          "name": "edit_time_limit",
          "type": "int"
        },
        {
          "name": "revoke_time_limit",
          "type": "int"
        },
        {
          "name": "revoke_pm_time_limit",
          "type": "int"
        },
        {
          "name": "rating_e_decay",
          "type": "int"
        },
        {
          "name": "stickers_recent_limit",
          "type": "int"
        },
        {
          "name": "stickers_faved_limit",
          "type": "int"
        },
        {
          "name": "channels_read_media_period",
          "type": "int"
        },
        {
          "name": "tmp_sessions",
          "type": "flags.0?int"
        },
        {
          "name": "pinned_dialogs_count_max",
          "type": "int"
        },
        {
          "name": "pinned_infolder_count_max",
          "type": "int"
        },
        {
          "name": "call_receive_timeout_ms",
          "type": "int"
        },
        {
          "name": "call_ring_timeout_ms",
          "type": "int"
        },
        {
          "name": "call_connect_timeout_ms",
          "type": "int"
        },
        {
          "name": "call_packet_timeout_ms",
          "type": "int"
        },
        {
          "name": "me_url_prefix",
          "type": "string"
        },
        {
          "name": "autoupdate_url_prefix",
          "type": "flags.7?string"
        },
        {
          "name": "gif_search_username",
          "type": "flags.9?string"
        },
        {
          "name": "venue_search_username",
          "type": "flags.10?string"
        },
        {
          "name": "img_search_username",
          "type": "flags.11?string"
        },
        {
          "name": "static_maps_provider",
          "type": "flags.12?string"
        },
        {
          "name": "caption_length_max",
          "type": "int"
        },
        {
          "name": "message_length_max",
          "type": "int"
        },
        {
          "name": "webfile_dc_id",
          "type": "int"
        },
        {
          "name": "suggested_lang_code",
          "type": "flags.2?string"
        },
        {
          "name": "lang_pack_version",
          "type": "flags.2?int"
        },
        {
          "name": "base_lang_pack_version",
          "type": "flags.2?int"
        }
      ],
      "type": "Config"
    },
    "856380452": {
      "id": 856380452,
      "predicate": "updateReadChannelInbox",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.0?int"
        },
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "still_unread_count",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "859091184": {
      "id": 859091184,
      "predicate": "inputSecureFileUploaded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "md5_checksum",
          "type": "string"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "InputSecureFile"
    },
    "861169551": {
      "id": 861169551,
      "predicate": "updatePtsChanged",
      "params": [],
      "type": "Update"
    },
    "863093588": {
      "id": 863093588,
      "predicate": "messages.peerDialogs",
      "params": [
        {
          "name": "dialogs",
          "type": "Vector<Dialog>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "state",
          "type": "updates.State"
        }
      ],
      "type": "messages.PeerDialogs"
    },
    "864077702": {
      "id": 864077702,
      "predicate": "inputBotInlineMessageMediaAuto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    "871426631": {
      "id": 871426631,
      "predicate": "secureCredentialsEncrypted",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "SecureCredentialsEncrypted"
    },
    "872932635": {
      "id": 872932635,
      "predicate": "stickerSetMultiCovered",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "covers",
          "type": "Vector<Document>"
        }
      ],
      "type": "StickerSetCovered"
    },
    "873977640": {
      "id": 873977640,
      "predicate": "inputPaymentCredentials",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "save",
          "type": "flags.0?true"
        },
        {
          "name": "data",
          "type": "DataJSON"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    "878078826": {
      "id": 878078826,
      "predicate": "pageTableCell",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "header",
          "type": "flags.0?true"
        },
        {
          "name": "align_center",
          "type": "flags.3?true"
        },
        {
          "name": "align_right",
          "type": "flags.4?true"
        },
        {
          "name": "valign_middle",
          "type": "flags.5?true"
        },
        {
          "name": "valign_bottom",
          "type": "flags.6?true"
        },
        {
          "name": "text",
          "type": "flags.7?RichText"
        },
        {
          "name": "colspan",
          "type": "flags.1?int"
        },
        {
          "name": "rowspan",
          "type": "flags.2?int"
        }
      ],
      "type": "PageTableCell"
    },
    "878931416": {
      "id": 878931416,
      "predicate": "secureValueErrorTranslationFiles",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "Vector<bytes>"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    "880243653": {
      "id": 880243653,
      "predicate": "pong",
      "params": [
        {
          "name": "msg_id",
          "type": "long"
        },
        {
          "name": "ping_id",
          "type": "long"
        }
      ],
      "type": "Pong"
    },
    "889353612": {
      "id": 889353612,
      "predicate": "replyKeyboardMarkup",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "resize",
          "type": "flags.0?true"
        },
        {
          "name": "single_use",
          "type": "flags.1?true"
        },
        {
          "name": "selective",
          "type": "flags.2?true"
        },
        {
          "name": "rows",
          "type": "Vector<KeyboardButtonRow>"
        }
      ],
      "type": "ReplyMarkup"
    },
    "889491791": {
      "id": 889491791,
      "predicate": "updateDialogFilters",
      "params": [],
      "type": "Update"
    },
    "892193368": {
      "id": 892193368,
      "predicate": "messageEntityMentionName",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "893020267": {
      "id": 893020267,
      "predicate": "messageFwdHeader",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "from_id",
          "type": "flags.0?int"
        },
        {
          "name": "from_name",
          "type": "flags.5?string"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "channel_id",
          "type": "flags.1?int"
        },
        {
          "name": "channel_post",
          "type": "flags.2?int"
        },
        {
          "name": "post_author",
          "type": "flags.3?string"
        },
        {
          "name": "saved_from_peer",
          "type": "flags.4?Peer"
        },
        {
          "name": "saved_from_msg_id",
          "type": "flags.4?int"
        },
        {
          "name": "psa_type",
          "type": "flags.6?string"
        }
      ],
      "type": "MessageFwdHeader"
    },
    "894777186": {
      "id": 894777186,
      "predicate": "textAnchor",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    "904138920": {
      "id": 904138920,
      "predicate": "messages.stickerSetInstallResultArchive",
      "params": [
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        }
      ],
      "type": "messages.StickerSetInstallResult"
    },
    "909603888": {
      "id": 909603888,
      "predicate": "messageUserVoteInputOption",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "MessageUserVote"
    },
    "911761060": {
      "id": 911761060,
      "predicate": "messages.botCallbackAnswer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "alert",
          "type": "flags.1?true"
        },
        {
          "name": "has_url",
          "type": "flags.3?true"
        },
        {
          "name": "native_ui",
          "type": "flags.4?true"
        },
        {
          "name": "message",
          "type": "flags.0?string"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        },
        {
          "name": "cache_time",
          "type": "int"
        }
      ],
      "type": "messages.BotCallbackAnswer"
    },
    "922273905": {
      "id": 922273905,
      "predicate": "documentEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "Document"
    },
    "928101534": {
      "id": 928101534,
      "predicate": "inputMessagesFilterMusic",
      "params": [],
      "type": "MessagesFilter"
    },
    "935395612": {
      "id": 935395612,
      "predicate": "chatPhotoEmpty",
      "params": [],
      "type": "ChatPhoto"
    },
    "946083368": {
      "id": 946083368,
      "predicate": "messages.stickerSetInstallResultSuccess",
      "params": [],
      "type": "messages.StickerSetInstallResult"
    },
    "956179895": {
      "id": 956179895,
      "predicate": "updateEncryptedMessagesRead",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "957176926": {
      "id": 957176926,
      "predicate": "auth.loginTokenSuccess",
      "params": [
        {
          "name": "authorization",
          "type": "auth.Authorization"
        }
      ],
      "type": "auth.LoginToken"
    },
    "961092808": {
      "id": 961092808,
      "predicate": "privacyKeyPhoneP2P",
      "params": [],
      "type": "PrivacyKey"
    },
    "967122427": {
      "id": 967122427,
      "predicate": "updateNewScheduledMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "Update"
    },
    "972174080": {
      "id": 972174080,
      "predicate": "pageBlockCover",
      "params": [
        {
          "name": "cover",
          "type": "PageBlock"
        }
      ],
      "type": "PageBlock"
    },
    "975236280": {
      "id": 975236280,
      "predicate": "inputMessagesFilterChatPhotos",
      "params": [],
      "type": "MessagesFilter"
    },
    "982592842": {
      "id": 982592842,
      "predicate": "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow",
      "params": [
        {
          "name": "salt1",
          "type": "bytes"
        },
        {
          "name": "salt2",
          "type": "bytes"
        },
        {
          "name": "g",
          "type": "int"
        },
        {
          "name": "p",
          "type": "bytes"
        }
      ],
      "type": "PasswordKdfAlgo"
    },
    "995769920": {
      "id": 995769920,
      "predicate": "channelAdminLogEvent",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "action",
          "type": "ChannelAdminLogEventAction"
        }
      ],
      "type": "ChannelAdminLogEvent"
    },
    "997055186": {
      "id": 997055186,
      "predicate": "pollAnswerVoters",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chosen",
          "type": "flags.0?true"
        },
        {
          "name": "correct",
          "type": "flags.1?true"
        },
        {
          "name": "option",
          "type": "bytes"
        },
        {
          "name": "voters",
          "type": "int"
        }
      ],
      "type": "PollAnswerVoters"
    },
    "1001634122": {
      "id": 1001634122,
      "predicate": "inputPhoto",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        }
      ],
      "type": "InputPhoto"
    },
    "1003222836": {
      "id": 1003222836,
      "predicate": "dh_gen_ok",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce_hash1",
          "type": "int128"
        }
      ],
      "type": "Set_client_DH_params_answer"
    },
    "1004149726": {
      "id": 1004149726,
      "predicate": "chat",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "kicked",
          "type": "flags.1?true"
        },
        {
          "name": "left",
          "type": "flags.2?true"
        },
        {
          "name": "deactivated",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "ChatPhoto"
        },
        {
          "name": "participants_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "migrated_to",
          "type": "flags.6?InputChannel"
        },
        {
          "name": "admin_rights",
          "type": "flags.14?ChatAdminRights"
        },
        {
          "name": "default_banned_rights",
          "type": "flags.18?ChatBannedRights"
        }
      ],
      "type": "Chat"
    },
    "1006044124": {
      "id": 1006044124,
      "predicate": "encryptedChatWaiting",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        }
      ],
      "type": "EncryptedChat"
    },
    "1008755359": {
      "id": 1008755359,
      "predicate": "inlineBotSwitchPM",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "InlineBotSwitchPM"
    },
    "1009288385": {
      "id": 1009288385,
      "predicate": "textUrl",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "webpage_id",
          "type": "long"
        }
      ],
      "type": "RichText"
    },
    "1012306921": {
      "id": 1012306921,
      "predicate": "inputTheme",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputTheme"
    },
    "1013613780": {
      "id": 1013613780,
      "predicate": "p_q_inner_data_temp",
      "params": [
        {
          "name": "pq",
          "type": "bytes"
        },
        {
          "name": "p",
          "type": "bytes"
        },
        {
          "name": "q",
          "type": "bytes"
        },
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce",
          "type": "int256"
        },
        {
          "name": "expires_in",
          "type": "int"
        }
      ],
      "type": "P_Q_inner_data"
    },
    "1030105979": {
      "id": 1030105979,
      "predicate": "privacyKeyPhoneCall",
      "params": [],
      "type": "PrivacyKey"
    },
    "1034709504": {
      "id": 1034709504,
      "predicate": "secureValueTypePassport",
      "params": [],
      "type": "SecureValueType"
    },
    "1035688326": {
      "id": 1035688326,
      "predicate": "auth.sentCodeTypeApp",
      "params": [
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    "1036876423": {
      "id": 1036876423,
      "predicate": "inputBotInlineMessageText",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.0?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    "1038967584": {
      "id": 1038967584,
      "predicate": "messageMediaEmpty",
      "params": [],
      "type": "MessageMedia"
    },
    "1041346555": {
      "id": 1041346555,
      "predicate": "updates.channelDifferenceEmpty",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "final",
          "type": "flags.0?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "timeout",
          "type": "flags.1?int"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    "1042605427": {
      "id": 1042605427,
      "predicate": "payments.bankCardData",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "open_urls",
          "type": "Vector<BankCardOpenUrl>"
        }
      ],
      "type": "payments.BankCardData"
    },
    "1061556205": {
      "id": 1061556205,
      "predicate": "chatParticipants",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "Vector<ChatParticipant>"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "ChatParticipants"
    },
    "1062645411": {
      "id": 1062645411,
      "predicate": "payments.paymentForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_save_credentials",
          "type": "flags.2?true"
        },
        {
          "name": "password_missing",
          "type": "flags.3?true"
        },
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "provider_id",
          "type": "int"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "native_provider",
          "type": "flags.4?string"
        },
        {
          "name": "native_params",
          "type": "flags.4?DataJSON"
        },
        {
          "name": "saved_info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "saved_credentials",
          "type": "flags.1?PaymentSavedCredentials"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.PaymentForm"
    },
    "1064139624": {
      "id": 1064139624,
      "predicate": "jsonNull",
      "params": [],
      "type": "JSONValue"
    },
    "1065280907": {
      "id": 1065280907,
      "predicate": "messageMediaDice",
      "params": [
        {
          "name": "value",
          "type": "int"
        },
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "MessageMedia"
    },
    "1072550713": {
      "id": 1072550713,
      "predicate": "true",
      "params": [],
      "type": "True"
    },
    "1075322878": {
      "id": 1075322878,
      "predicate": "inputPhotoFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "thumb_size",
          "type": "string"
        }
      ],
      "type": "InputFileLocation"
    },
    "1080663248": {
      "id": 1080663248,
      "predicate": "messageActionPaymentSent",
      "params": [
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        }
      ],
      "type": "MessageAction"
    },
    "1081547008": {
      "id": 1081547008,
      "predicate": "updateChannelWebPage",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "webpage",
          "type": "WebPage"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "1086091090": {
      "id": 1086091090,
      "predicate": "storage.filePartial",
      "params": [],
      "type": "storage.FileType"
    },
    "1098628881": {
      "id": 1098628881,
      "predicate": "inputBotInlineMessageMediaVenue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    "1121994683": {
      "id": 1121994683,
      "predicate": "channelAdminLogEventActionDeleteMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "1123585836": {
      "id": 1123585836,
      "predicate": "updateMessagePollVote",
      "params": [
        {
          "name": "poll_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "options",
          "type": "Vector<bytes>"
        }
      ],
      "type": "Update"
    },
    "1124062251": {
      "id": 1124062251,
      "predicate": "privacyKeyAddedByPhone",
      "params": [],
      "type": "PrivacyKey"
    },
    "1129042607": {
      "id": 1129042607,
      "predicate": "channelAdminLogEventActionChangePhoto",
      "params": [
        {
          "name": "prev_photo",
          "type": "Photo"
        },
        {
          "name": "new_photo",
          "type": "Photo"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "1135492588": {
      "id": 1135492588,
      "predicate": "updateStickerSets",
      "params": [],
      "type": "Update"
    },
    "1148485274": {
      "id": 1148485274,
      "predicate": "auth.authorizationSignUpRequired",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "terms_of_service",
          "type": "flags.0?help.TermsOfService"
        }
      ],
      "type": "auth.Authorization"
    },
    "1158290442": {
      "id": 1158290442,
      "predicate": "messages.foundGifs",
      "params": [
        {
          "name": "next_offset",
          "type": "int"
        },
        {
          "name": "results",
          "type": "Vector<FoundGif>"
        }
      ],
      "type": "messages.FoundGifs"
    },
    "1160515173": {
      "id": 1160515173,
      "predicate": "message",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "post",
          "type": "flags.14?true"
        },
        {
          "name": "from_scheduled",
          "type": "flags.18?true"
        },
        {
          "name": "legacy",
          "type": "flags.19?true"
        },
        {
          "name": "edit_hide",
          "type": "flags.21?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "flags.8?int"
        },
        {
          "name": "to_id",
          "type": "Peer"
        },
        {
          "name": "fwd_from",
          "type": "flags.2?MessageFwdHeader"
        },
        {
          "name": "via_bot_id",
          "type": "flags.11?int"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.3?int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "media",
          "type": "flags.9?MessageMedia"
        },
        {
          "name": "reply_markup",
          "type": "flags.6?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector<MessageEntity>"
        },
        {
          "name": "views",
          "type": "flags.10?int"
        },
        {
          "name": "edit_date",
          "type": "flags.15?int"
        },
        {
          "name": "post_author",
          "type": "flags.16?string"
        },
        {
          "name": "grouped_id",
          "type": "flags.17?long"
        },
        {
          "name": "restriction_reason",
          "type": "flags.22?Vector<RestrictionReason>"
        }
      ],
      "type": "Message"
    },
    "1180041828": {
      "id": 1180041828,
      "predicate": "updateLangPackTooLong",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    "1182402406": {
      "id": 1182402406,
      "predicate": "pageBlockParagraph",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    "1188831161": {
      "id": 1188831161,
      "predicate": "dh_gen_retry",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce_hash2",
          "type": "int128"
        }
      ],
      "type": "Set_client_DH_params_answer"
    },
    "1189204285": {
      "id": 1189204285,
      "predicate": "recentMeUrlUnknown",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "RecentMeUrl"
    },
    "1197267925": {
      "id": 1197267925,
      "predicate": "chatPhoto",
      "params": [
        {
          "name": "photo_small",
          "type": "FileLocation"
        },
        {
          "name": "photo_big",
          "type": "FileLocation"
        },
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "ChatPhoto"
    },
    "1200788123": {
      "id": 1200788123,
      "predicate": "messageActionScreenshotTaken",
      "params": [],
      "type": "MessageAction"
    },
    "1202287072": {
      "id": 1202287072,
      "predicate": "statsURL",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "StatsURL"
    },
    "1212395773": {
      "id": 1212395773,
      "predicate": "inputMediaGifExternal",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    "1216809369": {
      "id": 1216809369,
      "predicate": "pageBlockFooter",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    "1217033015": {
      "id": 1217033015,
      "predicate": "messageActionChatAddUser",
      "params": [
        {
          "name": "users",
          "type": "Vector<int>"
        }
      ],
      "type": "MessageAction"
    },
    "1218642516": {
      "id": 1218642516,
      "predicate": "replyInlineMarkup",
      "params": [
        {
          "name": "rows",
          "type": "Vector<KeyboardButtonRow>"
        }
      ],
      "type": "ReplyMarkup"
    },
    "1244130093": {
      "id": 1244130093,
      "predicate": "statsGraphAsync",
      "params": [
        {
          "name": "token",
          "type": "string"
        }
      ],
      "type": "StatsGraph"
    },
    "1248893260": {
      "id": 1248893260,
      "predicate": "encryptedFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "key_fingerprint",
          "type": "int"
        }
      ],
      "type": "EncryptedFile"
    },
    "1251338318": {
      "id": 1251338318,
      "predicate": "inputNotifyChats",
      "params": [],
      "type": "InputNotifyPeer"
    },
    "1251549527": {
      "id": 1251549527,
      "predicate": "inputStickeredMediaPhoto",
      "params": [
        {
          "name": "id",
          "type": "InputPhoto"
        }
      ],
      "type": "InputStickeredMedia"
    },
    "1258196845": {
      "id": 1258196845,
      "predicate": "updates.differenceTooLong",
      "params": [
        {
          "name": "pts",
          "type": "int"
        }
      ],
      "type": "updates.Difference"
    },
    "1258941372": {
      "id": 1258941372,
      "predicate": "storage.fileMov",
      "params": [],
      "type": "storage.FileType"
    },
    "1262639204": {
      "id": 1262639204,
      "predicate": "inputBotInlineMessageGame",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    "1272375192": {
      "id": 1272375192,
      "predicate": "messageMediaPoll",
      "params": [
        {
          "name": "poll",
          "type": "Poll"
        },
        {
          "name": "results",
          "type": "PollResults"
        }
      ],
      "type": "MessageMedia"
    },
    "1279515160": {
      "id": 1279515160,
      "predicate": "updateUserPinnedMessage",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "1280209983": {
      "id": 1280209983,
      "predicate": "messageEntityCashtag",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "1283572154": {
      "id": 1283572154,
      "predicate": "inputPrivacyValueAllowChatParticipants",
      "params": [
        {
          "name": "chats",
          "type": "Vector<int>"
        }
      ],
      "type": "InputPrivacyRule"
    },
    "1297858060": {
      "id": 1297858060,
      "predicate": "privacyValueAllowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector<int>"
        }
      ],
      "type": "PrivacyRule"
    },
    "1304052993": {
      "id": 1304052993,
      "predicate": "account.takeout",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "account.Takeout"
    },
    "1314881805": {
      "id": 1314881805,
      "predicate": "payments.paymentResult",
      "params": [
        {
          "name": "updates",
          "type": "Updates"
        }
      ],
      "type": "payments.PaymentResult"
    },
    "1318109142": {
      "id": 1318109142,
      "predicate": "updateMessageID",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    "1326562017": {
      "id": 1326562017,
      "predicate": "userProfilePhotoEmpty",
      "params": [],
      "type": "UserProfilePhoto"
    },
    "1329878739": {
      "id": 1329878739,
      "predicate": "pageBlockPullquote",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "caption",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    "1335282456": {
      "id": 1335282456,
      "predicate": "inputPrivacyKeyStatusTimestamp",
      "params": [],
      "type": "InputPrivacyKey"
    },
    "1336154098": {
      "id": 1336154098,
      "predicate": "inputBotInlineResultGame",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    "1338747336": {
      "id": 1338747336,
      "predicate": "messages.archivedStickers",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        }
      ],
      "type": "messages.ArchivedStickers"
    },
    "1342771681": {
      "id": 1342771681,
      "predicate": "payments.paymentReceipt",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "provider_id",
          "type": "int"
        },
        {
          "name": "info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "shipping",
          "type": "flags.1?ShippingOption"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "credentials_title",
          "type": "string"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "payments.PaymentReceipt"
    },
    "1343122938": {
      "id": 1343122938,
      "predicate": "privacyKeyChatInvite",
      "params": [],
      "type": "PrivacyKey"
    },
    "1352683077": {
      "id": 1352683077,
      "predicate": "account.privacyRules",
      "params": [
        {
          "name": "rules",
          "type": "Vector<PrivacyRule>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "account.PrivacyRules"
    },
    "1355435489": {
      "id": 1355435489,
      "predicate": "phoneCallDiscarded",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "need_rating",
          "type": "flags.2?true"
        },
        {
          "name": "need_debug",
          "type": "flags.3?true"
        },
        {
          "name": "video",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "reason",
          "type": "flags.0?PhoneCallDiscardReason"
        },
        {
          "name": "duration",
          "type": "flags.1?int"
        }
      ],
      "type": "PhoneCall"
    },
    "1358175439": {
      "id": 1358175439,
      "predicate": "keyboardButtonGame",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    "1358283666": {
      "id": 1358283666,
      "predicate": "inputMessagesFilterVoice",
      "params": [],
      "type": "MessagesFilter"
    },
    "1359533640": {
      "id": 1359533640,
      "predicate": "messages.foundStickerSets",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        }
      ],
      "type": "messages.FoundStickerSets"
    },
    "1363483106": {
      "id": 1363483106,
      "predicate": "dialogPeerFolder",
      "params": [
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "DialogPeer"
    },
    "1371385889": {
      "id": 1371385889,
      "predicate": "messageActionChatMigrateTo",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    "1384777335": {
      "id": 1384777335,
      "predicate": "storage.fileMp3",
      "params": [],
      "type": "storage.FileType"
    },
    "1398007207": {
      "id": 1398007207,
      "predicate": "auth.sentCodeTypeCall",
      "params": [
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    "1399245077": {
      "id": 1399245077,
      "predicate": "phoneCallEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "PhoneCall"
    },
    "1399317950": {
      "id": 1399317950,
      "predicate": "inputSecureFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputSecureFile"
    },
    "1401984889": {
      "id": 1401984889,
      "predicate": "channelAdminLogEventActionToggleSlowMode",
      "params": [
        {
          "name": "prev_value",
          "type": "int"
        },
        {
          "name": "new_value",
          "type": "int"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "1417832080": {
      "id": 1417832080,
      "predicate": "updateBotInlineQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "geo",
          "type": "flags.0?GeoPoint"
        },
        {
          "name": "offset",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    "1421174295": {
      "id": 1421174295,
      "predicate": "webPageAttributeTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "documents",
          "type": "flags.0?Vector<Document>"
        },
        {
          "name": "settings",
          "type": "flags.1?ThemeSettings"
        }
      ],
      "type": "WebPageAttribute"
    },
    "1421875280": {
      "id": 1421875280,
      "predicate": "updateChatDefaultBannedRights",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "default_banned_rights",
          "type": "ChatBannedRights"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "1427671598": {
      "id": 1427671598,
      "predicate": "channelAdminLogEventActionChangeAbout",
      "params": [
        {
          "name": "prev_value",
          "type": "string"
        },
        {
          "name": "new_value",
          "type": "string"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "1442983757": {
      "id": 1442983757,
      "predicate": "updateLangPack",
      "params": [
        {
          "name": "difference",
          "type": "LangPackDifference"
        }
      ],
      "type": "Update"
    },
    "1443858741": {
      "id": 1443858741,
      "predicate": "messages.sentEncryptedMessage",
      "params": [
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    "1444661369": {
      "id": 1444661369,
      "predicate": "contactBlocked",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ContactBlocked"
    },
    "1448076945": {
      "id": 1448076945,
      "predicate": "updateLoginToken",
      "params": [],
      "type": "Update"
    },
    "1450380236": {
      "id": 1450380236,
      "predicate": "null",
      "params": [],
      "type": "Null"
    },
    "1457575028": {
      "id": 1457575028,
      "predicate": "messageMediaGeo",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        }
      ],
      "type": "MessageMedia"
    },
    "1458172132": {
      "id": 1458172132,
      "predicate": "inputMessagesFilterPhotoVideo",
      "params": [],
      "type": "MessagesFilter"
    },
    "1459478408": {
      "id": 1459478408,
      "predicate": "p_q_inner_data_temp_dc",
      "params": [
        {
          "name": "pq",
          "type": "bytes"
        },
        {
          "name": "p",
          "type": "bytes"
        },
        {
          "name": "q",
          "type": "bytes"
        },
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce",
          "type": "int256"
        },
        {
          "name": "dc",
          "type": "int"
        },
        {
          "name": "expires_in",
          "type": "int"
        }
      ],
      "type": "P_Q_inner_d"
    },
    "1461304012": {
      "id": 1461304012,
      "predicate": "inputPrivacyKeyProfilePhoto",
      "params": [],
      "type": "InputPrivacyKey"
    },
    "1461528386": {
      "id": 1461528386,
      "predicate": "updateReadFeaturedStickers",
      "params": [],
      "type": "Update"
    },
    "1462101002": {
      "id": 1462101002,
      "predicate": "cdnConfig",
      "params": [
        {
          "name": "public_keys",
          "type": "Vector<CdnPublicKey>"
        }
      ],
      "type": "CdnConfig"
    },
    "1471006352": {
      "id": 1471006352,
      "predicate": "phoneCallDiscardReasonHangup",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    "1474462241": {
      "id": 1474462241,
      "predicate": "account.contentSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "sensitive_enabled",
          "type": "flags.0?true"
        },
        {
          "name": "sensitive_can_change",
          "type": "flags.1?true"
        }
      ],
      "type": "account.ContentSettings"
    },
    "1474492012": {
      "id": 1474492012,
      "predicate": "inputMessagesFilterEmpty",
      "params": [],
      "type": "MessagesFilter"
    },
    "1490799288": {
      "id": 1490799288,
      "predicate": "inputReportReasonSpam",
      "params": [],
      "type": "ReportReason"
    },
    "1493171408": {
      "id": 1493171408,
      "predicate": "highScore",
      "params": [
        {
          "name": "pos",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "HighScore"
    },
    "1511503333": {
      "id": 1511503333,
      "predicate": "inputEncryptedFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputEncryptedFile"
    },
    "1516793212": {
      "id": 1516793212,
      "predicate": "chatInviteAlready",
      "params": [
        {
          "name": "chat",
          "type": "Chat"
        }
      ],
      "type": "ChatInvite"
    },
    "1527845466": {
      "id": 1527845466,
      "predicate": "baseThemeArctic",
      "params": [],
      "type": "BaseTheme"
    },
    "1530447553": {
      "id": 1530447553,
      "predicate": "inputMediaUploadedDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "nosound_video",
          "type": "flags.3?true"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "thumb",
          "type": "flags.2?InputFile"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        },
        {
          "name": "stickers",
          "type": "flags.0?Vector<InputDocument>"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.1?int"
        }
      ],
      "type": "InputMedia"
    },
    "1538843921": {
      "id": 1538843921,
      "predicate": "message",
      "params": [
        {
          "name": "msg_id",
          "type": "long"
        },
        {
          "name": "seqno",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "int"
        },
        {
          "name": "body",
          "type": "Object"
        }
      ],
      "type": "Message"
    },
    "1548249383": {
      "id": 1548249383,
      "predicate": "updateUserTyping",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Update"
    },
    "1556570557": {
      "id": 1556570557,
      "predicate": "emojiKeywordsDifference",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "keywords",
          "type": "Vector<EmojiKeyword>"
        }
      ],
      "type": "EmojiKeywordsDifference"
    },
    "1558266229": {
      "id": 1558266229,
      "predicate": "popularContact",
      "params": [
        {
          "name": "client_id",
          "type": "long"
        },
        {
          "name": "importers",
          "type": "int"
        }
      ],
      "type": "PopularContact"
    },
    "1563376297": {
      "id": 1563376297,
      "predicate": "updateBotPrecheckoutQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "shipping_option_id",
          "type": "flags.1?string"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        }
      ],
      "type": "Update"
    },
    "1567990072": {
      "id": 1567990072,
      "predicate": "updates.differenceEmpty",
      "params": [
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        }
      ],
      "type": "updates.Difference"
    },
    "1571494644": {
      "id": 1571494644,
      "predicate": "exportedMessageLink",
      "params": [
        {
          "name": "link",
          "type": "string"
        },
        {
          "name": "html",
          "type": "string"
        }
      ],
      "type": "ExportedMessageLink"
    },
    "1577067778": {
      "id": 1577067778,
      "predicate": "auth.sentCode",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "auth.SentCodeType"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "next_type",
          "type": "flags.1?auth.CodeType"
        },
        {
          "name": "timeout",
          "type": "flags.2?int"
        }
      ],
      "type": "auth.SentCode"
    },
    "1577484359": {
      "id": 1577484359,
      "predicate": "pageListOrderedItemText",
      "params": [
        {
          "name": "num",
          "type": "string"
        },
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageListOrderedItem"
    },
    "1579864942": {
      "id": 1579864942,
      "predicate": "rpc_answer_unknown",
      "params": [],
      "type": "RpcDropAnswer"
    },
    "1599903217": {
      "id": 1599903217,
      "predicate": "channelAdminLogEventActionTogglePreHistoryHidden",
      "params": [
        {
          "name": "new_value",
          "type": "Bool"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "1605510357": {
      "id": 1605510357,
      "predicate": "chatAdminRights",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "change_info",
          "type": "flags.0?true"
        },
        {
          "name": "post_messages",
          "type": "flags.1?true"
        },
        {
          "name": "edit_messages",
          "type": "flags.2?true"
        },
        {
          "name": "delete_messages",
          "type": "flags.3?true"
        },
        {
          "name": "ban_users",
          "type": "flags.4?true"
        },
        {
          "name": "invite_users",
          "type": "flags.5?true"
        },
        {
          "name": "pin_messages",
          "type": "flags.7?true"
        },
        {
          "name": "add_admins",
          "type": "flags.9?true"
        }
      ],
      "type": "ChatAdminRights"
    },
    "1648543603": {
      "id": 1648543603,
      "predicate": "fileHash",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "bytes"
        }
      ],
      "type": "FileHash"
    },
    "1653390447": {
      "id": 1653390447,
      "predicate": "sendMessageChooseContactAction",
      "params": [],
      "type": "SendMessageAction"
    },
    "1654593920": {
      "id": 1654593920,
      "predicate": "auth.loginToken",
      "params": [
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "token",
          "type": "bytes"
        }
      ],
      "type": "auth.LoginToken"
    },
    "1656358105": {
      "id": 1656358105,
      "predicate": "updateNewChannelMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "1658015945": {
      "id": 1658015945,
      "predicate": "destroy_session_none",
      "params": [
        {
          "name": "session_id",
          "type": "long"
        }
      ],
      "type": "DestroySessionRes"
    },
    "1658238041": {
      "id": 1658238041,
      "predicate": "msgs_ack",
      "params": [
        {
          "name": "msg_ids",
          "type": "Vector<long>"
        }
      ],
      "type": "MsgsAck"
    },
    "1662637586": {
      "id": 1662637586,
      "predicate": "documentAttributeSticker",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "mask",
          "type": "flags.1?true"
        },
        {
          "name": "alt",
          "type": "string"
        },
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "mask_coords",
          "type": "flags.0?MaskCoords"
        }
      ],
      "type": "DocumentAttribute"
    },
    "1674235686": {
      "id": 1674235686,
      "predicate": "account.autoDownloadSettings",
      "params": [
        {
          "name": "low",
          "type": "AutoDownloadSettings"
        },
        {
          "name": "medium",
          "type": "AutoDownloadSettings"
        },
        {
          "name": "high",
          "type": "AutoDownloadSettings"
        }
      ],
      "type": "account.AutoDownloadSettings"
    },
    "1678812626": {
      "id": 1678812626,
      "predicate": "stickerSetCovered",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "cover",
          "type": "Document"
        }
      ],
      "type": "StickerSetCovered"
    },
    "1679398724": {
      "id": 1679398724,
      "predicate": "secureFileEmpty",
      "params": [],
      "type": "SecureFile"
    },
    "1684014375": {
      "id": 1684014375,
      "predicate": "inputDialogPeerFolder",
      "params": [
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "InputDialogPeer"
    },
    "1690108678": {
      "id": 1690108678,
      "predicate": "inputEncryptedFileUploaded",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "md5_checksum",
          "type": "string"
        },
        {
          "name": "key_fingerprint",
          "type": "int"
        }
      ],
      "type": "InputEncryptedFile"
    },
    "1692693954": {
      "id": 1692693954,
      "predicate": "messageEntityEmail",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "1694474197": {
      "id": 1694474197,
      "predicate": "messages.chats",
      "params": [
        {
          "name": "chats",
          "type": "Vector<Chat>"
        }
      ],
      "type": "messages.Chats"
    },
    "1698855810": {
      "id": 1698855810,
      "predicate": "privacyValueAllowAll",
      "params": [],
      "type": "PrivacyRule"
    },
    "1705048653": {
      "id": 1705048653,
      "predicate": "pageBlockCollage",
      "params": [
        {
          "name": "items",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    "1715713620": {
      "id": 1715713620,
      "predicate": "client_DH_inner_data",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "retry_id",
          "type": "long"
        },
        {
          "name": "g_b",
          "type": "bytes"
        }
      ],
      "type": "Client_DH_Inner_Data"
    },
    "1717706985": {
      "id": 1717706985,
      "predicate": "secureValueErrorFiles",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "Vector<bytes>"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    "1722786150": {
      "id": 1722786150,
      "predicate": "help.deepLinkInfoEmpty",
      "params": [],
      "type": "help.DeepLinkInfo"
    },
    "1730456516": {
      "id": 1730456516,
      "predicate": "textBold",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    "1748655686": {
      "id": 1748655686,
      "predicate": "keyboardButtonCallback",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "KeyboardButton"
    },
    "1753886890": {
      "id": 1753886890,
      "predicate": "updateNewStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "messages.StickerSet"
        }
      ],
      "type": "Update"
    },
    "1757493555": {
      "id": 1757493555,
      "predicate": "updateReadMessagesContents",
      "params": [
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "1766936791": {
      "id": 1766936791,
      "predicate": "messageMediaPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "photo",
          "type": "flags.0?Photo"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.2?int"
        }
      ],
      "type": "MessageMedia"
    },
    "1776236393": {
      "id": 1776236393,
      "predicate": "chatInviteEmpty",
      "params": [],
      "type": "ExportedChatInvite"
    },
    "1777096355": {
      "id": 1777096355,
      "predicate": "privacyKeyForwards",
      "params": [],
      "type": "PrivacyKey"
    },
    "1783299128": {
      "id": 1783299128,
      "predicate": "channelAdminLogEventActionChangeUsername",
      "params": [
        {
          "name": "prev_value",
          "type": "string"
        },
        {
          "name": "new_value",
          "type": "string"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "1783556146": {
      "id": 1783556146,
      "predicate": "help.deepLinkInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "update_app",
          "type": "flags.0?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        }
      ],
      "type": "help.DeepLinkInfo"
    },
    "1786671974": {
      "id": 1786671974,
      "predicate": "updatePeerSettings",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "settings",
          "type": "PeerSettings"
        }
      ],
      "type": "Update"
    },
    "1815593308": {
      "id": 1815593308,
      "predicate": "documentAttributeImageSize",
      "params": [
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        }
      ],
      "type": "DocumentAttribute"
    },
    "1816074681": {
      "id": 1816074681,
      "predicate": "textFixed",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    "1816636575": {
      "id": 1816636575,
      "predicate": "langPackStringPluralized",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "zero_value",
          "type": "flags.0?string"
        },
        {
          "name": "one_value",
          "type": "flags.1?string"
        },
        {
          "name": "two_value",
          "type": "flags.2?string"
        },
        {
          "name": "few_value",
          "type": "flags.3?string"
        },
        {
          "name": "many_value",
          "type": "flags.4?string"
        },
        {
          "name": "other_value",
          "type": "string"
        }
      ],
      "type": "LangPackString"
    },
    "1823064809": {
      "id": 1823064809,
      "predicate": "pollAnswer",
      "params": [
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "option",
          "type": "bytes"
        }
      ],
      "type": "PollAnswer"
    },
    "1827637959": {
      "id": 1827637959,
      "predicate": "messageEntityBotCommand",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "1834973166": {
      "id": 1834973166,
      "predicate": "baseThemeTinted",
      "params": [],
      "type": "BaseTheme"
    },
    "1851755554": {
      "id": 1851755554,
      "predicate": "updateChatParticipantDelete",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "1852826908": {
      "id": 1852826908,
      "predicate": "updateDialogPinned",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "folder_id",
          "type": "flags.1?int"
        },
        {
          "name": "peer",
          "type": "DialogPeer"
        }
      ],
      "type": "Update"
    },
    "1859134776": {
      "id": 1859134776,
      "predicate": "messageEntityUrl",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "1868782349": {
      "id": 1868782349,
      "predicate": "messageEntityHashtag",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "1869903447": {
      "id": 1869903447,
      "predicate": "pageCaption",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "credit",
          "type": "RichText"
        }
      ],
      "type": "PageCaption"
    },
    "1881892265": {
      "id": 1881892265,
      "predicate": "account.wallPapers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "wallpapers",
          "type": "Vector<WallPaper>"
        }
      ],
      "type": "account.WallPapers"
    },
    "1887741886": {
      "id": 1887741886,
      "predicate": "updateContactsReset",
      "params": [],
      "type": "Update"
    },
    "1889215493": {
      "id": 1889215493,
      "predicate": "channelAdminLogEventActionEditMessage",
      "params": [
        {
          "name": "prev_message",
          "type": "Message"
        },
        {
          "name": "new_message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "1890305021": {
      "id": 1890305021,
      "predicate": "pageBlockTitle",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    "1891070632": {
      "id": 1891070632,
      "predicate": "contacts.topPeers",
      "params": [
        {
          "name": "categories",
          "type": "Vector<TopPeerCategoryPeers>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.TopPeers"
    },
    "1893427255": {
      "id": 1893427255,
      "predicate": "updateChannelAvailableMessages",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "available_min_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "1908216652": {
      "id": 1908216652,
      "predicate": "dialogFolder",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.2?true"
        },
        {
          "name": "folder",
          "type": "Folder"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "top_message",
          "type": "int"
        },
        {
          "name": "unread_muted_peers_count",
          "type": "int"
        },
        {
          "name": "unread_unmuted_peers_count",
          "type": "int"
        },
        {
          "name": "unread_muted_messages_count",
          "type": "int"
        },
        {
          "name": "unread_unmuted_messages_count",
          "type": "int"
        }
      ],
      "type": "Dialog"
    },
    "1910543603": {
      "id": 1910543603,
      "predicate": "messages.dialogsSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "dialogs",
          "type": "Vector<Dialog>"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Dialogs"
    },
    "1913199744": {
      "id": 1913199744,
      "predicate": "inputWallPaperSlug",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "InputWallPaper"
    },
    "1918567619": {
      "id": 1918567619,
      "predicate": "updatesCombined",
      "params": [
        {
          "name": "updates",
          "type": "Vector<Update>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq_start",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    "1923290508": {
      "id": 1923290508,
      "predicate": "auth.codeTypeSms",
      "params": [],
      "type": "auth.CodeType"
    },
    "1928391342": {
      "id": 1928391342,
      "predicate": "inputDocumentEmpty",
      "params": [],
      "type": "InputDocument"
    },
    "1930545681": {
      "id": 1930545681,
      "predicate": "webPageNotModified",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "cached_page_views",
          "type": "flags.0?int"
        }
      ],
      "type": "WebPage"
    },
    "1938967520": {
      "id": 1938967520,
      "predicate": "messageEntityPre",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "language",
          "type": "string"
        }
      ],
      "type": "MessageEntity"
    },
    "1945237724": {
      "id": 1945237724,
      "predicate": "msg_container",
      "params": [
        {
          "name": "messages",
          "type": "vector<%Message>"
        }
      ],
      "type": "MessageContainer"
    },
    "1948046307": {
      "id": 1948046307,
      "predicate": "auth.codeTypeCall",
      "params": [],
      "type": "auth.CodeType"
    },
    "1949890536": {
      "id": 1949890536,
      "predicate": "dialogFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "contacts",
          "type": "flags.0?true"
        },
        {
          "name": "non_contacts",
          "type": "flags.1?true"
        },
        {
          "name": "groups",
          "type": "flags.2?true"
        },
        {
          "name": "broadcasts",
          "type": "flags.3?true"
        },
        {
          "name": "bots",
          "type": "flags.4?true"
        },
        {
          "name": "exclude_muted",
          "type": "flags.11?true"
        },
        {
          "name": "exclude_read",
          "type": "flags.12?true"
        },
        {
          "name": "exclude_archived",
          "type": "flags.13?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "emoticon",
          "type": "flags.25?string"
        },
        {
          "name": "pinned_peers",
          "type": "Vector<InputPeer>"
        },
        {
          "name": "include_peers",
          "type": "Vector<InputPeer>"
        },
        {
          "name": "exclude_peers",
          "type": "Vector<InputPeer>"
        }
      ],
      "type": "DialogFilter"
    },
    "1950782688": {
      "id": 1950782688,
      "predicate": "textPlain",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    "1951620897": {
      "id": 1951620897,
      "predicate": "messages.messagesNotModified",
      "params": [
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    "1957577280": {
      "id": 1957577280,
      "predicate": "updates",
      "params": [
        {
          "name": "updates",
          "type": "Vector<Update>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    "1968737087": {
      "id": 1968737087,
      "predicate": "inputClientProxy",
      "params": [
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        }
      ],
      "type": "InputClientProxy"
    },
    "1973679973": {
      "id": 1973679973,
      "predicate": "bind_auth_key_inner",
      "params": [
        {
          "name": "nonce",
          "type": "long"
        },
        {
          "name": "temp_auth_key_id",
          "type": "long"
        },
        {
          "name": "perm_auth_key_id",
          "type": "long"
        },
        {
          "name": "temp_session_id",
          "type": "long"
        },
        {
          "name": "expires_at",
          "type": "int"
        }
      ],
      "type": "BindAuthKeyInner"
    },
    "1981704948": {
      "id": 1981704948,
      "predicate": "messageEntityBankCard",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "1984755728": {
      "id": 1984755728,
      "predicate": "botInlineMessageMediaAuto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    "1987480557": {
      "id": 1987480557,
      "predicate": "pageBlockDetails",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "open",
          "type": "flags.0?true"
        },
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "title",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    "1990644519": {
      "id": 1990644519,
      "predicate": "messageEntityTextUrl",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        },
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "MessageEntity"
    },
    "2002815875": {
      "id": 2002815875,
      "predicate": "keyboardButtonRow",
      "params": [
        {
          "name": "buttons",
          "type": "Vector<KeyboardButton>"
        }
      ],
      "type": "KeyboardButtonRow"
    },
    "2004110666": {
      "id": 2004110666,
      "predicate": "dialogFilterSuggested",
      "params": [
        {
          "name": "filter",
          "type": "DialogFilter"
        },
        {
          "name": "description",
          "type": "string"
        }
      ],
      "type": "DialogFilterSuggested"
    },
    "2009052699": {
      "id": 2009052699,
      "predicate": "photoSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "location",
          "type": "FileLocation"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "size",
          "type": "int"
        }
      ],
      "type": "PhotoSize"
    },
    "2010127419": {
      "id": 2010127419,
      "predicate": "contacts.importedContacts",
      "params": [
        {
          "name": "imported",
          "type": "Vector<ImportedContact>"
        },
        {
          "name": "popular_invites",
          "type": "Vector<PopularContact>"
        },
        {
          "name": "retry_contacts",
          "type": "Vector<long>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.ImportedContacts"
    },
    "2011940674": {
      "id": 2011940674,
      "predicate": "userStatusLastMonth",
      "params": [],
      "type": "UserStatus"
    },
    "2013922064": {
      "id": 2013922064,
      "predicate": "help.termsOfService",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "popup",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "DataJSON"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        },
        {
          "name": "min_age_confirm",
          "type": "flags.1?int"
        }
      ],
      "type": "help.TermsOfService"
    },
    "2027216577": {
      "id": 2027216577,
      "predicate": "updateShort",
      "params": [
        {
          "name": "update",
          "type": "Update"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    "2043348061": {
      "id": 2043348061,
      "predicate": "server_DH_params_fail",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce_hash",
          "type": "int128"
        }
      ],
      "type": "Server_DH_Params"
    },
    "2054162547": {
      "id": 2054162547,
      "predicate": "secureValueErrorFile",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    "2054952868": {
      "id": 2054952868,
      "predicate": "inputMessagesFilterRoundVoice",
      "params": [],
      "type": "MessagesFilter"
    },
    "2072935910": {
      "id": 2072935910,
      "predicate": "inputPeerUser",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputPeer"
    },
    "2084316681": {
      "id": 2084316681,
      "predicate": "messageMediaGeoLive",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "MessageMedia"
    },
    "2089805750": {
      "id": 2089805750,
      "predicate": "pageBlockVideo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "autoplay",
          "type": "flags.0?true"
        },
        {
          "name": "loop",
          "type": "flags.1?true"
        },
        {
          "name": "video_id",
          "type": "long"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    "2103482845": {
      "id": 2103482845,
      "predicate": "securePlainPhone",
      "params": [
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "SecurePlainData"
    },
    "2104790276": {
      "id": 2104790276,
      "predicate": "dataJSON",
      "params": [
        {
          "name": "data",
          "type": "string"
        }
      ],
      "type": "DataJSON"
    },
    "2105940488": {
      "id": 2105940488,
      "predicate": "msg_resend_req",
      "params": [
        {
          "name": "msg_ids",
          "type": "Vector<long>"
        }
      ],
      "type": "MsgResendReq"
    },
    "2107670217": {
      "id": 2107670217,
      "predicate": "inputPeerSelf",
      "params": [],
      "type": "InputPeer"
    },
    "2120376535": {
      "id": 2120376535,
      "predicate": "textConcat",
      "params": [
        {
          "name": "texts",
          "type": "Vector<RichText>"
        }
      ],
      "type": "RichText"
    },
    "2129714567": {
      "id": 2129714567,
      "predicate": "inputMessagesFilterUrl",
      "params": [],
      "type": "MessagesFilter"
    },
    "2131196633": {
      "id": 2131196633,
      "predicate": "contacts.resolvedPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.ResolvedPeer"
    },
    "2134579434": {
      "id": 2134579434,
      "predicate": "inputPeerEmpty",
      "params": [],
      "type": "InputPeer"
    },
    "2137482273": {
      "id": 2137482273,
      "predicate": "account.themes",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "themes",
          "type": "Vector<Theme>"
        }
      ],
      "type": "account.Themes"
    },
    "2139689491": {
      "id": 2139689491,
      "predicate": "updateWebPage",
      "params": [
        {
          "name": "webpage",
          "type": "WebPage"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "2144015272": {
      "id": 2144015272,
      "predicate": "messageActionChatEditPhoto",
      "params": [
        {
          "name": "photo",
          "type": "Photo"
        }
      ],
      "type": "MessageAction"
    },
    "2151899626": {
      "id": 2151899626,
      "predicate": "pageBlockAudio",
      "params": [
        {
          "name": "audio_id",
          "type": "long"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    "2156729764": {
      "id": 2156729764,
      "predicate": "channelParticipantCreator",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "rank",
          "type": "flags.0?string"
        }
      ],
      "type": "ChannelParticipant"
    },
    "2157819615": {
      "id": 2157819615,
      "predicate": "msg_new_detailed_info",
      "params": [
        {
          "name": "answer_msg_id",
          "type": "long"
        },
        {
          "name": "bytes",
          "type": "int"
        },
        {
          "name": "status",
          "type": "int"
        }
      ],
      "type": "MsgDetailedInfo"
    },
    "2160695144": {
      "id": 2160695144,
      "predicate": "inputMessagesFilterPhoneCalls",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "missed",
          "type": "flags.0?true"
        }
      ],
      "type": "MessagesFilter"
    },
    "2162236031": {
      "id": 2162236031,
      "predicate": "messageActionPhoneCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.2?true"
        },
        {
          "name": "call_id",
          "type": "long"
        },
        {
          "name": "reason",
          "type": "flags.0?PhoneCallDiscardReason"
        },
        {
          "name": "duration",
          "type": "flags.1?int"
        }
      ],
      "type": "MessageAction"
    },
    "2163009562": {
      "id": 2163009562,
      "predicate": "updateUserBlocked",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "blocked",
          "type": "Bool"
        }
      ],
      "type": "Update"
    },
    "2166326607": {
      "id": 2166326607,
      "predicate": "account.sentEmailCode",
      "params": [
        {
          "name": "email_pattern",
          "type": "string"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "account.SentEmailCode"
    },
    "2172921549": {
      "id": 2172921549,
      "predicate": "peerSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "report_spam",
          "type": "flags.0?true"
        },
        {
          "name": "add_contact",
          "type": "flags.1?true"
        },
        {
          "name": "block_contact",
          "type": "flags.2?true"
        },
        {
          "name": "share_contact",
          "type": "flags.3?true"
        },
        {
          "name": "need_contacts_exception",
          "type": "flags.4?true"
        },
        {
          "name": "report_geo",
          "type": "flags.5?true"
        }
      ],
      "type": "PeerSettings"
    },
    "2182544291": {
      "id": 2182544291,
      "predicate": "updateTheme",
      "params": [
        {
          "name": "theme",
          "type": "Theme"
        }
      ],
      "type": "Update"
    },
    "2188348256": {
      "id": 2188348256,
      "predicate": "messageEntityItalic",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "2191366618": {
      "id": 2191366618,
      "predicate": "secureRequiredType",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "native_names",
          "type": "flags.0?true"
        },
        {
          "name": "selfie_required",
          "type": "flags.1?true"
        },
        {
          "name": "translation_required",
          "type": "flags.2?true"
        },
        {
          "name": "type",
          "type": "SecureValueType"
        }
      ],
      "type": "SecureRequiredType"
    },
    "2199371971": {
      "id": 2199371971,
      "predicate": "updateBotWebhookJSON",
      "params": [
        {
          "name": "data",
          "type": "DataJSON"
        }
      ],
      "type": "Update"
    },
    "2211011308": {
      "id": 2211011308,
      "predicate": "p_q_inner_data",
      "params": [
        {
          "name": "pq",
          "type": "bytes"
        },
        {
          "name": "p",
          "type": "bytes"
        },
        {
          "name": "q",
          "type": "bytes"
        },
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce",
          "type": "int256"
        }
      ],
      "type": "P_Q_inner_data"
    },
    "2212879956": {
      "id": 2212879956,
      "predicate": "messageEmpty",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Message"
    },
    "2217196460": {
      "id": 2217196460,
      "predicate": "inputWallPaperNoFile",
      "params": [],
      "type": "InputWallPaper"
    },
    "2220168007": {
      "id": 2220168007,
      "predicate": "messageMediaInvoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "shipping_address_requested",
          "type": "flags.1?true"
        },
        {
          "name": "test",
          "type": "flags.3?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?WebDocument"
        },
        {
          "name": "receipt_msg_id",
          "type": "flags.2?int"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "MessageMedia"
    },
    "2228326789": {
      "id": 2228326789,
      "predicate": "messages.affectedMessages",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    "2246320897": {
      "id": 2246320897,
      "predicate": "phoneCallDiscardReasonMissed",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    "2249243371": {
      "id": 2249243371,
      "predicate": "msg_resend_ans_req",
      "params": [
        {
          "name": "msg_ids",
          "type": "Vector<long>"
        }
      ],
      "type": "MsgResendReq"
    },
    "2250033312": {
      "id": 2250033312,
      "predicate": "inputStickerSetShortName",
      "params": [
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "InputStickerSet"
    },
    "2252807570": {
      "id": 2252807570,
      "predicate": "securePasswordKdfAlgoSHA512",
      "params": [
        {
          "name": "salt",
          "type": "bytes"
        }
      ],
      "type": "SecurePasswordKdfAlgo"
    },
    "2257003832": {
      "id": 2257003832,
      "predicate": "inputMessagePinned",
      "params": [],
      "type": "InputMessage"
    },
    "2257201829": {
      "id": 2257201829,
      "predicate": "secureValueErrorReverseSide",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    "2258466191": {
      "id": 2258466191,
      "predicate": "secureValueError",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    "2262925665": {
      "id": 2262925665,
      "predicate": "poll",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "closed",
          "type": "flags.0?true"
        },
        {
          "name": "public_voters",
          "type": "flags.1?true"
        },
        {
          "name": "multiple_choice",
          "type": "flags.2?true"
        },
        {
          "name": "quiz",
          "type": "flags.3?true"
        },
        {
          "name": "question",
          "type": "string"
        },
        {
          "name": "answers",
          "type": "Vector<PollAnswer>"
        },
        {
          "name": "close_period",
          "type": "flags.4?int"
        },
        {
          "name": "close_date",
          "type": "flags.5?int"
        }
      ],
      "type": "Poll"
    },
    "2267003193": {
      "id": 2267003193,
      "predicate": "updateGeoLiveViewed",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "2269294207": {
      "id": 2269294207,
      "predicate": "phoneCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "p2p_allowed",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_a_or_b",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        },
        {
          "name": "connections",
          "type": "Vector<PhoneConnection>"
        },
        {
          "name": "start_date",
          "type": "int"
        }
      ],
      "type": "PhoneCall"
    },
    "2280307539": {
      "id": 2280307539,
      "predicate": "phoneCallRequested",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_a_hash",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "PhoneCall"
    },
    "2294256409": {
      "id": 2294256409,
      "predicate": "inputBotInlineResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "description",
          "type": "flags.2?string"
        },
        {
          "name": "url",
          "type": "flags.3?string"
        },
        {
          "name": "thumb",
          "type": "flags.4?InputWebDocument"
        },
        {
          "name": "content",
          "type": "flags.5?InputWebDocument"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    "2297593788": {
      "id": 2297593788,
      "predicate": "sendMessageRecordRoundAction",
      "params": [],
      "type": "SendMessageAction"
    },
    "2299280777": {
      "id": 2299280777,
      "predicate": "inputBotInlineMessageID",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputBotInlineMessageID"
    },
    "2299755533": {
      "id": 2299755533,
      "predicate": "secureValueTypeBankStatement",
      "params": [],
      "type": "SecureValueType"
    },
    "2303962423": {
      "id": 2303962423,
      "predicate": "inputChatPhoto",
      "params": [
        {
          "name": "id",
          "type": "InputPhoto"
        }
      ],
      "type": "InputChatPhoto"
    },
    "2307472197": {
      "id": 2307472197,
      "predicate": "updateChannelReadMessagesContents",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        }
      ],
      "type": "Update"
    },
    "2324063644": {
      "id": 2324063644,
      "predicate": "botInlineMessageMediaVenue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    "2330640067": {
      "id": 2330640067,
      "predicate": "secureData",
      "params": [
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "data_hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "SecureData"
    },
    "2331249445": {
      "id": 2331249445,
      "predicate": "wallPaperNoFile",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "default",
          "type": "flags.1?true"
        },
        {
          "name": "dark",
          "type": "flags.4?true"
        },
        {
          "name": "settings",
          "type": "flags.2?WallPaperSettings"
        }
      ],
      "type": "WallPaper"
    },
    "2339628899": {
      "id": 2339628899,
      "predicate": "privacyValueDisallowAll",
      "params": [],
      "type": "PrivacyRule"
    },
    "2340959368": {
      "id": 2340959368,
      "predicate": "secureValueTypeRentalAgreement",
      "params": [],
      "type": "SecureValueType"
    },
    "2349199817": {
      "id": 2349199817,
      "predicate": "help.supportName",
      "params": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "help.SupportName"
    },
    "2352576831": {
      "id": 2352576831,
      "predicate": "help.promoData",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "proxy",
          "type": "flags.0?true"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "psa_type",
          "type": "flags.1?string"
        },
        {
          "name": "psa_message",
          "type": "flags.2?string"
        }
      ],
      "type": "help.PromoData"
    },
    "2356252295": {
      "id": 2356252295,
      "predicate": "messages.messages",
      "params": [
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Messages"
    },
    "2357159394": {
      "id": 2357159394,
      "predicate": "botInlineMessageText",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.0?true"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.1?Vector<MessageEntity>"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    "2361446705": {
      "id": 2361446705,
      "predicate": "msgs_all_info",
      "params": [
        {
          "name": "msg_ids",
          "type": "Vector<long>"
        },
        {
          "name": "info",
          "type": "bytes"
        }
      ],
      "type": "MsgsAllInfo"
    },
    "2377921334": {
      "id": 2377921334,
      "predicate": "recentMeUrlUser",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "RecentMeUrl"
    },
    "2378853029": {
      "id": 2378853029,
      "predicate": "photos.photos",
      "params": [
        {
          "name": "photos",
          "type": "Vector<Photo>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "photos.Photos"
    },
    "2384074613": {
      "id": 2384074613,
      "predicate": "nearestDc",
      "params": [
        {
          "name": "country",
          "type": "string"
        },
        {
          "name": "this_dc",
          "type": "int"
        },
        {
          "name": "nearest_dc",
          "type": "int"
        }
      ],
      "type": "NearestDc"
    },
    "2386339822": {
      "id": 2386339822,
      "predicate": "secureValueTypeEmail",
      "params": [],
      "type": "SecureValueType"
    },
    "2388564083": {
      "id": 2388564083,
      "predicate": "updateDcOptions",
      "params": [
        {
          "name": "dc_options",
          "type": "Vector<DcOption>"
        }
      ],
      "type": "Update"
    },
    "2393138358": {
      "id": 2393138358,
      "predicate": "statsGraph",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "json",
          "type": "DataJSON"
        },
        {
          "name": "zoom_token",
          "type": "flags.0?string"
        }
      ],
      "type": "StatsGraph"
    },
    "2399639107": {
      "id": 2399639107,
      "predicate": "channelAdminLogEventActionStopPoll",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "2402399015": {
      "id": 2402399015,
      "predicate": "messageActionPaymentSentMe",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "total_amount",
          "type": "long"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "info",
          "type": "flags.0?PaymentRequestedInfo"
        },
        {
          "name": "shipping_option_id",
          "type": "flags.1?string"
        },
        {
          "name": "charge",
          "type": "PaymentCharge"
        }
      ],
      "type": "MessageAction"
    },
    "2408320590": {
      "id": 2408320590,
      "predicate": "urlAuthResultAccepted",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "UrlAuthResult"
    },
    "2415565343": {
      "id": 2415565343,
      "predicate": "pageBlockSubtitle",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    "2416444065": {
      "id": 2416444065,
      "predicate": "contacts.blockedSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "blocked",
          "type": "Vector<ContactBlocked>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.Blocked"
    },
    "2417034343": {
      "id": 2417034343,
      "predicate": "inputPrivacyValueDisallowUsers",
      "params": [
        {
          "name": "users",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "InputPrivacyRule"
    },
    "2424728814": {
      "id": 2424728814,
      "predicate": "updateDeleteScheduledMessages",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        }
      ],
      "type": "Update"
    },
    "2426158996": {
      "id": 2426158996,
      "predicate": "paymentRequestedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "name",
          "type": "flags.0?string"
        },
        {
          "name": "phone",
          "type": "flags.1?string"
        },
        {
          "name": "email",
          "type": "flags.2?string"
        },
        {
          "name": "shipping_address",
          "type": "flags.3?PostAddress"
        }
      ],
      "type": "PaymentRequestedInfo"
    },
    "2437922577": {
      "id": 2437922577,
      "predicate": "updateShortMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "fwd_from",
          "type": "flags.2?MessageFwdHeader"
        },
        {
          "name": "via_bot_id",
          "type": "flags.11?int"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.3?int"
        },
        {
          "name": "entities",
          "type": "flags.7?Vector<MessageEntity>"
        }
      ],
      "type": "Updates"
    },
    "2457621940": {
      "id": 2457621940,
      "predicate": "inputChatUploadedPhoto",
      "params": [
        {
          "name": "file",
          "type": "InputFile"
        }
      ],
      "type": "InputChatPhoto"
    },
    "2460428406": {
      "id": 2460428406,
      "predicate": "messageActionGameScore",
      "params": [
        {
          "name": "game_id",
          "type": "long"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    "2463316494": {
      "id": 2463316494,
      "predicate": "urlAuthResultRequest",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "request_write_access",
          "type": "flags.0?true"
        },
        {
          "name": "bot",
          "type": "User"
        },
        {
          "name": "domain",
          "type": "string"
        }
      ],
      "type": "UrlAuthResult"
    },
    "2473931806": {
      "id": 2473931806,
      "predicate": "updateSavedGifs",
      "params": [],
      "type": "Update"
    },
    "2474924225": {
      "id": 2474924225,
      "predicate": "user",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "self",
          "type": "flags.10?true"
        },
        {
          "name": "contact",
          "type": "flags.11?true"
        },
        {
          "name": "mutual_contact",
          "type": "flags.12?true"
        },
        {
          "name": "deleted",
          "type": "flags.13?true"
        },
        {
          "name": "bot",
          "type": "flags.14?true"
        },
        {
          "name": "bot_chat_history",
          "type": "flags.15?true"
        },
        {
          "name": "bot_nochats",
          "type": "flags.16?true"
        },
        {
          "name": "verified",
          "type": "flags.17?true"
        },
        {
          "name": "restricted",
          "type": "flags.18?true"
        },
        {
          "name": "min",
          "type": "flags.20?true"
        },
        {
          "name": "bot_inline_geo",
          "type": "flags.21?true"
        },
        {
          "name": "support",
          "type": "flags.23?true"
        },
        {
          "name": "scam",
          "type": "flags.24?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "flags.0?long"
        },
        {
          "name": "first_name",
          "type": "flags.1?string"
        },
        {
          "name": "last_name",
          "type": "flags.2?string"
        },
        {
          "name": "username",
          "type": "flags.3?string"
        },
        {
          "name": "phone",
          "type": "flags.4?string"
        },
        {
          "name": "photo",
          "type": "flags.5?UserProfilePhoto"
        },
        {
          "name": "status",
          "type": "flags.6?UserStatus"
        },
        {
          "name": "bot_info_version",
          "type": "flags.14?int"
        },
        {
          "name": "restriction_reason",
          "type": "flags.18?Vector<RestrictionReason>"
        },
        {
          "name": "bot_inline_placeholder",
          "type": "flags.19?string"
        },
        {
          "name": "lang_code",
          "type": "flags.22?string"
        }
      ],
      "type": "User"
    },
    "2491197512": {
      "id": 2491197512,
      "predicate": "messages.botResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "gallery",
          "type": "flags.0?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "next_offset",
          "type": "flags.1?string"
        },
        {
          "name": "switch_pm",
          "type": "flags.2?InlineBotSwitchPM"
        },
        {
          "name": "results",
          "type": "Vector<BotInlineResult>"
        },
        {
          "name": "cache_time",
          "type": "int"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.BotResults"
    },
    "2492727090": {
      "id": 2492727090,
      "predicate": "messages.sentEncryptedFile",
      "params": [
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "file",
          "type": "EncryptedFile"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    "2495428845": {
      "id": 2495428845,
      "predicate": "messageActionPinMessage",
      "params": [],
      "type": "MessageAction"
    },
    "2496933607": {
      "id": 2496933607,
      "predicate": "channelMessagesFilterEmpty",
      "params": [],
      "type": "ChannelMessagesFilter"
    },
    "2503031564": {
      "id": 2503031564,
      "predicate": "updateUserPhoto",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "photo",
          "type": "UserProfilePhoto"
        },
        {
          "name": "previous",
          "type": "Bool"
        }
      ],
      "type": "Update"
    },
    "2513611922": {
      "id": 2513611922,
      "predicate": "messageActionChannelCreate",
      "params": [
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    "2514746351": {
      "id": 2514746351,
      "predicate": "messageActionChatDeletePhoto",
      "params": [],
      "type": "MessageAction"
    },
    "2517214492": {
      "id": 2517214492,
      "predicate": "inputMessagesFilterPhotos",
      "params": [],
      "type": "MessagesFilter"
    },
    "2517966829": {
      "id": 2517966829,
      "predicate": "privacyKeyProfilePhoto",
      "params": [],
      "type": "PrivacyKey"
    },
    "2523198847": {
      "id": 2523198847,
      "predicate": "inputMediaEmpty",
      "params": [],
      "type": "InputMedia"
    },
    "2550256375": {
      "id": 2550256375,
      "predicate": "documentAttributeHasStickers",
      "params": [],
      "type": "DocumentAttribute"
    },
    "2555574726": {
      "id": 2555574726,
      "predicate": "documentAttributeAudio",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "voice",
          "type": "flags.10?true"
        },
        {
          "name": "duration",
          "type": "int"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "performer",
          "type": "flags.1?string"
        },
        {
          "name": "waveform",
          "type": "flags.2?bytes"
        }
      ],
      "type": "DocumentAttribute"
    },
    "2555978869": {
      "id": 2555978869,
      "predicate": "updateChannelPinnedMessage",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "2556788493": {
      "id": 2556788493,
      "predicate": "page",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "part",
          "type": "flags.0?true"
        },
        {
          "name": "rtl",
          "type": "flags.1?true"
        },
        {
          "name": "v2",
          "type": "flags.2?true"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "photos",
          "type": "Vector<Photo>"
        },
        {
          "name": "documents",
          "type": "Vector<Document>"
        },
        {
          "name": "views",
          "type": "flags.3?int"
        }
      ],
      "type": "Page"
    },
    "2558588504": {
      "id": 2558588504,
      "predicate": "inputCheckPasswordEmpty",
      "params": [],
      "type": "InputCheckPasswordSRP"
    },
    "2560699211": {
      "id": 2560699211,
      "predicate": "updateChannelMessageViews",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "views",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "2564655414": {
      "id": 2564655414,
      "predicate": "pageListOrderedItemBlocks",
      "params": [
        {
          "name": "num",
          "type": "string"
        },
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        }
      ],
      "type": "PageListOrderedItem"
    },
    "2565348666": {
      "id": 2565348666,
      "predicate": "botInfo",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "commands",
          "type": "Vector<BotCommand>"
        }
      ],
      "type": "BotInfo"
    },
    "2566302837": {
      "id": 2566302837,
      "predicate": "help.promoDataEmpty",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "help.PromoData"
    },
    "2569416247": {
      "id": 2569416247,
      "predicate": "messages.channelMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inexact",
          "type": "flags.1?true"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Messages"
    },
    "2574415285": {
      "id": 2574415285,
      "predicate": "boolTrue",
      "params": [],
      "type": "Bool"
    },
    "2575058250": {
      "id": 2575058250,
      "predicate": "phoneCallAccepted",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.5?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_b",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "PhoneCall"
    },
    "2577698595": {
      "id": 2577698595,
      "predicate": "secureValueTypeInternalPassport",
      "params": [],
      "type": "SecureValueType"
    },
    "2579616925": {
      "id": 2579616925,
      "predicate": "jsonObject",
      "params": [
        {
          "name": "value",
          "type": "Vector<JSONObjectValue>"
        }
      ],
      "type": "JSONValue"
    },
    "2581823594": {
      "id": 2581823594,
      "predicate": "secureValueTypePassportRegistration",
      "params": [],
      "type": "SecureValueType"
    },
    "2587622809": {
      "id": 2587622809,
      "predicate": "messages.highScores",
      "params": [
        {
          "name": "scores",
          "type": "Vector<HighScore>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.HighScores"
    },
    "2588027936": {
      "id": 2588027936,
      "predicate": "updateRecentStickers",
      "params": [],
      "type": "Update"
    },
    "2589733861": {
      "id": 2589733861,
      "predicate": "account.passwordSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "email",
          "type": "flags.0?string"
        },
        {
          "name": "secure_settings",
          "type": "flags.1?SecureSecretSettings"
        }
      ],
      "type": "account.PasswordSettings"
    },
    "2590370335": {
      "id": 2590370335,
      "predicate": "updateChatUserTyping",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Update"
    },
    "2592793057": {
      "id": 2592793057,
      "predicate": "pageBlockOrderedList",
      "params": [
        {
          "name": "items",
          "type": "Vector<PageListOrderedItem>"
        }
      ],
      "type": "PageBlock"
    },
    "2607407947": {
      "id": 2607407947,
      "predicate": "messageEntityPhone",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "2609510714": {
      "id": 2609510714,
      "predicate": "inputReportReasonCopyright",
      "params": [],
      "type": "ReportReason"
    },
    "2610053286": {
      "id": 2610053286,
      "predicate": "updateBotWebhookJSONQuery",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "DataJSON"
        },
        {
          "name": "timeout",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "2611125441": {
      "id": 2611125441,
      "predicate": "document",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "thumbs",
          "type": "flags.0?Vector<PhotoSize>"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        }
      ],
      "type": "Document"
    },
    "2611140608": {
      "id": 2611140608,
      "predicate": "chatEmpty",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Chat"
    },
    "2616017741": {
      "id": 2616017741,
      "predicate": "inputWebDocument",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        }
      ],
      "type": "InputWebDocument"
    },
    "2616769429": {
      "id": 2616769429,
      "predicate": "textStrike",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    "2618595402": {
      "id": 2618595402,
      "predicate": "themeSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "base_theme",
          "type": "BaseTheme"
        },
        {
          "name": "accent_color",
          "type": "int"
        },
        {
          "name": "message_top_color",
          "type": "flags.0?int"
        },
        {
          "name": "message_bottom_color",
          "type": "flags.0?int"
        },
        {
          "name": "wallpaper",
          "type": "flags.1?WallPaper"
        }
      ],
      "type": "ThemeSettings"
    },
    "2621249934": {
      "id": 2621249934,
      "predicate": "inputPeerNotifySettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "show_previews",
          "type": "flags.0?Bool"
        },
        {
          "name": "silent",
          "type": "flags.1?Bool"
        },
        {
          "name": "mute_until",
          "type": "flags.2?int"
        },
        {
          "name": "sound",
          "type": "flags.3?string"
        }
      ],
      "type": "InputPeerNotifySettings"
    },
    "2622389899": {
      "id": 2622389899,
      "predicate": "messageEntityUnderline",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "2624914441": {
      "id": 2624914441,
      "predicate": "foundGifCached",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "document",
          "type": "Document"
        }
      ],
      "type": "FoundGif"
    },
    "2627073979": {
      "id": 2627073979,
      "predicate": "inputPeerChannelFromMessage",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "InputPeer"
    },
    "2627162079": {
      "id": 2627162079,
      "predicate": "updateReadHistoryInbox",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.0?int"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "still_unread_count",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "2628808919": {
      "id": 2628808919,
      "predicate": "messageMediaDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "document",
          "type": "flags.0?Document"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.2?int"
        }
      ],
      "type": "MessageMedia"
    },
    "2631405892": {
      "id": 2631405892,
      "predicate": "messages.chatsSlice",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        }
      ],
      "type": "messages.Chats"
    },
    "2636808675": {
      "id": 2636808675,
      "predicate": "secureValueTypePersonalDetails",
      "params": [],
      "type": "SecureValueType"
    },
    "2639009728": {
      "id": 2639009728,
      "predicate": "phoneConnection",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "ipv6",
          "type": "string"
        },
        {
          "name": "port",
          "type": "int"
        },
        {
          "name": "peer_tag",
          "type": "bytes"
        }
      ],
      "type": "PhoneConnection"
    },
    "2645671021": {
      "id": 2645671021,
      "predicate": "peerUser",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "Peer"
    },
    "2649203305": {
      "id": 2649203305,
      "predicate": "inputStickerSetID",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputStickerSet"
    },
    "2652479990": {
      "id": 2652479990,
      "predicate": "messageService",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "out",
          "type": "flags.1?true"
        },
        {
          "name": "mentioned",
          "type": "flags.4?true"
        },
        {
          "name": "media_unread",
          "type": "flags.5?true"
        },
        {
          "name": "silent",
          "type": "flags.13?true"
        },
        {
          "name": "post",
          "type": "flags.14?true"
        },
        {
          "name": "legacy",
          "type": "flags.19?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "from_id",
          "type": "flags.8?int"
        },
        {
          "name": "to_id",
          "type": "Peer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.3?int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "action",
          "type": "MessageAction"
        }
      ],
      "type": "Message"
    },
    "2660214483": {
      "id": 2660214483,
      "predicate": "messages.favedStickersNotModified",
      "params": [],
      "type": "messages.FavedStickers"
    },
    "2663516424": {
      "id": 2663516424,
      "predicate": "new_session_created",
      "params": [
        {
          "name": "first_msg_id",
          "type": "long"
        },
        {
          "name": "unique_id",
          "type": "long"
        },
        {
          "name": "server_salt",
          "type": "long"
        }
      ],
      "type": "NewSession"
    },
    "2665345416": {
      "id": 2665345416,
      "predicate": "inputMessagesFilterDocument",
      "params": [],
      "type": "MessagesFilter"
    },
    "2668758040": {
      "id": 2668758040,
      "predicate": "chatBannedRights",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "view_messages",
          "type": "flags.0?true"
        },
        {
          "name": "send_messages",
          "type": "flags.1?true"
        },
        {
          "name": "send_media",
          "type": "flags.2?true"
        },
        {
          "name": "send_stickers",
          "type": "flags.3?true"
        },
        {
          "name": "send_gifs",
          "type": "flags.4?true"
        },
        {
          "name": "send_games",
          "type": "flags.5?true"
        },
        {
          "name": "send_inline",
          "type": "flags.6?true"
        },
        {
          "name": "embed_links",
          "type": "flags.7?true"
        },
        {
          "name": "send_polls",
          "type": "flags.8?true"
        },
        {
          "name": "change_info",
          "type": "flags.10?true"
        },
        {
          "name": "invite_users",
          "type": "flags.15?true"
        },
        {
          "name": "pin_messages",
          "type": "flags.17?true"
        },
        {
          "name": "until_date",
          "type": "int"
        }
      ],
      "type": "ChatBannedRights"
    },
    "2669814217": {
      "id": 2669814217,
      "predicate": "inputWebFileGeoPointLocation",
      "params": [
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "zoom",
          "type": "int"
        },
        {
          "name": "scale",
          "type": "int"
        }
      ],
      "type": "InputWebFileLocation"
    },
    "2676290718": {
      "id": 2676290718,
      "predicate": "messageMediaUnsupported",
      "params": [],
      "type": "MessageMedia"
    },
    "2679813636": {
      "id": 2679813636,
      "predicate": "messageActionHistoryClear",
      "params": [],
      "type": "MessageAction"
    },
    "2680163941": {
      "id": 2680163941,
      "predicate": "inputMessagesFilterVideo",
      "params": [],
      "type": "MessagesFilter"
    },
    "2681474008": {
      "id": 2681474008,
      "predicate": "notifyPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        }
      ],
      "type": "NotifyPeer"
    },
    "2686132985": {
      "id": 2686132985,
      "predicate": "recentMeUrlChat",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "RecentMeUrl"
    },
    "2688441221": {
      "id": 2688441221,
      "predicate": "replyKeyboardHide",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "selective",
          "type": "flags.2?true"
        }
      ],
      "type": "ReplyMarkup"
    },
    "2694370991": {
      "id": 2694370991,
      "predicate": "help.passportConfig",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "countries_langs",
          "type": "DataJSON"
        }
      ],
      "type": "help.PassportConfig"
    },
    "2698015819": {
      "id": 2698015819,
      "predicate": "secureValueTypeIdentityCard",
      "params": [],
      "type": "SecureValueType"
    },
    "2702460784": {
      "id": 2702460784,
      "predicate": "secureValueErrorTranslationFile",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    "2710034031": {
      "id": 2710034031,
      "predicate": "sendMessageRecordVideoAction",
      "params": [],
      "type": "SendMessageAction"
    },
    "2718806245": {
      "id": 2718806245,
      "predicate": "updateDeleteMessages",
      "params": [
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "2720652550": {
      "id": 2720652550,
      "predicate": "updateConfig",
      "params": [],
      "type": "Update"
    },
    "2725218331": {
      "id": 2725218331,
      "predicate": "channelAdminLogEventActionChangeLinkedChat",
      "params": [
        {
          "name": "prev_value",
          "type": "int"
        },
        {
          "name": "new_value",
          "type": "int"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "2727236953": {
      "id": 2727236953,
      "predicate": "messageUserVote",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "option",
          "type": "bytes"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "MessageUserVote"
    },
    "2734311552": {
      "id": 2734311552,
      "predicate": "keyboardButton",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    "2737347181": {
      "id": 2737347181,
      "predicate": "channelParticipantSelf",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChannelParticipant"
    },
    "2737690112": {
      "id": 2737690112,
      "predicate": "messageMediaWebPage",
      "params": [
        {
          "name": "webpage",
          "type": "WebPage"
        }
      ],
      "type": "MessageMedia"
    },
    "2743383929": {
      "id": 2743383929,
      "predicate": "receivedNotifyMessage",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "flags",
          "type": "int"
        }
      ],
      "type": "ReceivedNotifyMessage"
    },
    "2746567045": {
      "id": 2746567045,
      "predicate": "channelParticipantsKicked",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    "2755118061": {
      "id": 2755118061,
      "predicate": "wallPaper",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "default",
          "type": "flags.1?true"
        },
        {
          "name": "pattern",
          "type": "flags.3?true"
        },
        {
          "name": "dark",
          "type": "flags.4?true"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "document",
          "type": "Document"
        },
        {
          "name": "settings",
          "type": "flags.2?WallPaperSettings"
        }
      ],
      "type": "WallPaper"
    },
    "2755319991": {
      "id": 2755319991,
      "predicate": "rpc_answer_dropped",
      "params": [
        {
          "name": "msg_id",
          "type": "long"
        },
        {
          "name": "seq_no",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "int"
        }
      ],
      "type": "RpcDropAnswer"
    },
    "2756656886": {
      "id": 2756656886,
      "predicate": "pageBlockMap",
      "params": [
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "zoom",
          "type": "int"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    "2763835134": {
      "id": 2763835134,
      "predicate": "updates.channelDifferenceTooLong",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "final",
          "type": "flags.0?true"
        },
        {
          "name": "timeout",
          "type": "flags.1?int"
        },
        {
          "name": "dialog",
          "type": "Dialog"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    "2765966344": {
      "id": 2765966344,
      "predicate": "inputPrivacyKeyForwards",
      "params": [],
      "type": "InputPrivacyKey"
    },
    "2775329342": {
      "id": 2775329342,
      "predicate": "updates.state",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "qts",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "seq",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        }
      ],
      "type": "updates.State"
    },
    "2775937949": {
      "id": 2775937949,
      "predicate": "emojiURL",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "EmojiURL"
    },
    "2782339333": {
      "id": 2782339333,
      "predicate": "updateDialogFilterOrder",
      "params": [
        {
          "name": "order",
          "type": "Vector<int>"
        }
      ],
      "type": "Update"
    },
    "2791541658": {
      "id": 2791541658,
      "predicate": "messageActionChatCreate",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "users",
          "type": "Vector<int>"
        }
      ],
      "type": "MessageAction"
    },
    "2792792866": {
      "id": 2792792866,
      "predicate": "inputMessageID",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "InputMessage"
    },
    "2795351554": {
      "id": 2795351554,
      "predicate": "dh_gen_fail",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce_hash3",
          "type": "int128"
        }
      ],
      "type": "Set_client_DH_params_answer"
    },
    "2800599037": {
      "id": 2800599037,
      "predicate": "inputBotInlineMessageMediaContact",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    "2805148531": {
      "id": 2805148531,
      "predicate": "updateUserName",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Update"
    },
    "2817521681": {
      "id": 2817521681,
      "predicate": "bad_msg_notification",
      "params": [
        {
          "name": "bad_msg_id",
          "type": "long"
        },
        {
          "name": "bad_msg_seqno",
          "type": "int"
        },
        {
          "name": "error_code",
          "type": "int"
        }
      ],
      "type": "BadMsgNotification"
    },
    "2822794409": {
      "id": 2822794409,
      "predicate": "topPeerCategoryForwardUsers",
      "params": [],
      "type": "TopPeerCategory"
    },
    "2826014149": {
      "id": 2826014149,
      "predicate": "pageBlockEmbed",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "full_width",
          "type": "flags.0?true"
        },
        {
          "name": "allow_scrolling",
          "type": "flags.3?true"
        },
        {
          "name": "url",
          "type": "flags.1?string"
        },
        {
          "name": "html",
          "type": "flags.2?string"
        },
        {
          "name": "poster_photo_id",
          "type": "flags.4?long"
        },
        {
          "name": "w",
          "type": "flags.5?int"
        },
        {
          "name": "h",
          "type": "flags.5?int"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    "2832753831": {
      "id": 2832753831,
      "predicate": "inputBotInlineResultPhoto",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "InputPhoto"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    "2835028353": {
      "id": 2835028353,
      "predicate": "updates.differenceSlice",
      "params": [
        {
          "name": "new_messages",
          "type": "Vector<Message>"
        },
        {
          "name": "new_encrypted_messages",
          "type": "Vector<EncryptedMessage>"
        },
        {
          "name": "other_updates",
          "type": "Vector<Update>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "intermediate_state",
          "type": "updates.State"
        }
      ],
      "type": "updates.Difference"
    },
    "2837970629": {
      "id": 2837970629,
      "predicate": "messages.inactiveChats",
      "params": [
        {
          "name": "dates",
          "type": "Vector<int>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.InactiveChats"
    },
    "2845821519": {
      "id": 2845821519,
      "predicate": "upload.cdnFile",
      "params": [
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "upload.CdnFile"
    },
    "2849430303": {
      "id": 2849430303,
      "predicate": "urlAuthResultDefault",
      "params": [],
      "type": "UrlAuthResult"
    },
    "2851430293": {
      "id": 2851430293,
      "predicate": "p_q_inner_data_dc",
      "params": [
        {
          "name": "pq",
          "type": "bytes"
        },
        {
          "name": "p",
          "type": "bytes"
        },
        {
          "name": "q",
          "type": "bytes"
        },
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "new_nonce",
          "type": "int256"
        },
        {
          "name": "dc",
          "type": "int"
        }
      ],
      "type": "P_Q_inner_data"
    },
    "2852968932": {
      "id": 2852968932,
      "predicate": "sendMessageUploadDocumentAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    "2861972229": {
      "id": 2861972229,
      "predicate": "storage.fileUnknown",
      "params": [],
      "type": "storage.FileType"
    },
    "2869151449": {
      "id": 2869151449,
      "predicate": "auth.sentCodeTypeFlashCall",
      "params": [
        {
          "name": "pattern",
          "type": "string"
        }
      ],
      "type": "auth.SentCodeType"
    },
    "2869914398": {
      "id": 2869914398,
      "predicate": "updatePhoneCall",
      "params": [
        {
          "name": "phone_call",
          "type": "PhoneCall"
        }
      ],
      "type": "Update"
    },
    "2875595611": {
      "id": 2875595611,
      "predicate": "topPeerCategoryBotsPM",
      "params": [],
      "type": "TopPeerCategory"
    },
    "2877210784": {
      "id": 2877210784,
      "predicate": "encryptedChatEmpty",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "EncryptedChat"
    },
    "2884218878": {
      "id": 2884218878,
      "predicate": "messageActionBotAllowed",
      "params": [
        {
          "name": "domain",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    "2896258427": {
      "id": 2896258427,
      "predicate": "updateMessagePoll",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "poll_id",
          "type": "long"
        },
        {
          "name": "poll",
          "type": "flags.0?Poll"
        },
        {
          "name": "results",
          "type": "PollResults"
        }
      ],
      "type": "Update"
    },
    "2897086096": {
      "id": 2897086096,
      "predicate": "privacyValueDisallowChatParticipants",
      "params": [
        {
          "name": "chats",
          "type": "Vector<int>"
        }
      ],
      "type": "PrivacyRule"
    },
    "2902578717": {
      "id": 2902578717,
      "predicate": "authorization",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "current",
          "type": "flags.0?true"
        },
        {
          "name": "official_app",
          "type": "flags.1?true"
        },
        {
          "name": "password_pending",
          "type": "flags.2?true"
        },
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "device_model",
          "type": "string"
        },
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "system_version",
          "type": "string"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "app_name",
          "type": "string"
        },
        {
          "name": "app_version",
          "type": "string"
        },
        {
          "name": "date_created",
          "type": "int"
        },
        {
          "name": "date_active",
          "type": "int"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "country",
          "type": "string"
        },
        {
          "name": "region",
          "type": "string"
        }
      ],
      "type": "Authorization"
    },
    "2904965624": {
      "id": 2904965624,
      "predicate": "account.password",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_recovery",
          "type": "flags.0?true"
        },
        {
          "name": "has_secure_values",
          "type": "flags.1?true"
        },
        {
          "name": "has_password",
          "type": "flags.2?true"
        },
        {
          "name": "current_algo",
          "type": "flags.2?PasswordKdfAlgo"
        },
        {
          "name": "srp_B",
          "type": "flags.2?bytes"
        },
        {
          "name": "srp_id",
          "type": "flags.2?long"
        },
        {
          "name": "hint",
          "type": "flags.3?string"
        },
        {
          "name": "email_unconfirmed_pattern",
          "type": "flags.4?string"
        },
        {
          "name": "new_algo",
          "type": "PasswordKdfAlgo"
        },
        {
          "name": "new_secure_algo",
          "type": "SecurePasswordKdfAlgo"
        },
        {
          "name": "secure_random",
          "type": "bytes"
        }
      ],
      "type": "account.Password"
    },
    "2905480408": {
      "id": 2905480408,
      "predicate": "account.authorizationForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "required_types",
          "type": "Vector<SecureRequiredType>"
        },
        {
          "name": "values",
          "type": "Vector<SecureValue>"
        },
        {
          "name": "errors",
          "type": "Vector<SecureValueError>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        },
        {
          "name": "privacy_policy_url",
          "type": "flags.0?string"
        }
      ],
      "type": "account.AuthorizationForm"
    },
    "2907687357": {
      "id": 2907687357,
      "predicate": "messageInteractionCounters",
      "params": [
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "views",
          "type": "int"
        },
        {
          "name": "forwards",
          "type": "int"
        }
      ],
      "type": "MessageInteractionCounters"
    },
    "2918469347": {
      "id": 2918469347,
      "predicate": "inputReportReasonChildAbuse",
      "params": [],
      "type": "ReportReason"
    },
    "2921222285": {
      "id": 2921222285,
      "predicate": "storage.filePdf",
      "params": [],
      "type": "storage.FileType"
    },
    "2924480661": {
      "id": 2924480661,
      "predicate": "future_salts",
      "params": [
        {
          "name": "req_msg_id",
          "type": "long"
        },
        {
          "name": "now",
          "type": "int"
        },
        {
          "name": "salts",
          "type": "vector<future_salt>"
        }
      ],
      "type": "FutureSalts"
    },
    "2933316530": {
      "id": 2933316530,
      "predicate": "maskCoords",
      "params": [
        {
          "name": "n",
          "type": "int"
        },
        {
          "name": "x",
          "type": "double"
        },
        {
          "name": "y",
          "type": "double"
        },
        {
          "name": "zoom",
          "type": "double"
        }
      ],
      "type": "MaskCoords"
    },
    "2941295904": {
      "id": 2941295904,
      "predicate": "peerNotifySettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "show_previews",
          "type": "flags.0?Bool"
        },
        {
          "name": "silent",
          "type": "flags.1?Bool"
        },
        {
          "name": "mute_until",
          "type": "flags.2?int"
        },
        {
          "name": "sound",
          "type": "flags.3?string"
        }
      ],
      "type": "PeerNotifySettings"
    },
    "2950250427": {
      "id": 2950250427,
      "predicate": "keyboardButtonBuy",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    "2951442734": {
      "id": 2951442734,
      "predicate": "inputChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputChannel"
    },
    "2958420718": {
      "id": 2958420718,
      "predicate": "messageActionChannelMigrateFrom",
      "params": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    "2966521435": {
      "id": 2966521435,
      "predicate": "channelParticipantsBots",
      "params": [],
      "type": "ChannelParticipantsFilter"
    },
    "2976541737": {
      "id": 2976541737,
      "predicate": "keyboardButtonRequestPhone",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    "2982398631": {
      "id": 2982398631,
      "predicate": "channelAdminLogEventActionChangeStickerSet",
      "params": [
        {
          "name": "prev_stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "new_stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "2983951486": {
      "id": 2983951486,
      "predicate": "inputNotifyBroadcasts",
      "params": [],
      "type": "InputNotifyPeer"
    },
    "2997787404": {
      "id": 2997787404,
      "predicate": "messageActionChatDeleteUser",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    "3004386717": {
      "id": 3004386717,
      "predicate": "contacts.found",
      "params": [
        {
          "name": "my_results",
          "type": "Vector<Peer>"
        },
        {
          "name": "results",
          "type": "Vector<Peer>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.Found"
    },
    "3005262555": {
      "id": 3005262555,
      "predicate": "secureValueTypePhone",
      "params": [],
      "type": "SecureValueType"
    },
    "3012615176": {
      "id": 3012615176,
      "predicate": "pageRelatedArticle",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "webpage_id",
          "type": "long"
        },
        {
          "name": "title",
          "type": "flags.0?string"
        },
        {
          "name": "description",
          "type": "flags.1?string"
        },
        {
          "name": "photo_id",
          "type": "flags.2?long"
        },
        {
          "name": "author",
          "type": "flags.3?string"
        },
        {
          "name": "published_date",
          "type": "flags.4?int"
        }
      ],
      "type": "PageRelatedArticle"
    },
    "3015312949": {
      "id": 3015312949,
      "predicate": "inputMediaPhoto",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "InputPhoto"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    "3016663268": {
      "id": 3016663268,
      "predicate": "storage.fileMp4",
      "params": [],
      "type": "storage.FileType"
    },
    "3019592545": {
      "id": 3019592545,
      "predicate": "emojiLanguage",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "EmojiLanguage"
    },
    "3025955281": {
      "id": 3025955281,
      "predicate": "messages.affectedHistory",
      "params": [
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    "3026225513": {
      "id": 3026225513,
      "predicate": "channelParticipantsAdmins",
      "params": [],
      "type": "ChannelParticipantsFilter"
    },
    "3030575245": {
      "id": 3030575245,
      "predicate": "updateEncryption",
      "params": [
        {
          "name": "chat",
          "type": "EncryptedChat"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "3031420848": {
      "id": 3031420848,
      "predicate": "updatePeerLocated",
      "params": [
        {
          "name": "peers",
          "type": "Vector<PeerLocated>"
        }
      ],
      "type": "Update"
    },
    "3033021260": {
      "id": 3033021260,
      "predicate": "notifyUsers",
      "params": [],
      "type": "NotifyPeer"
    },
    "3039597469": {
      "id": 3039597469,
      "predicate": "contacts.topPeersDisabled",
      "params": [],
      "type": "contacts.TopPeers"
    },
    "3041516115": {
      "id": 3041516115,
      "predicate": "inputMessagesFilterRoundVideo",
      "params": [],
      "type": "MessagesFilter"
    },
    "3045658042": {
      "id": 3045658042,
      "predicate": "server_DH_inner_data",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "g",
          "type": "int"
        },
        {
          "name": "dh_prime",
          "type": "bytes"
        },
        {
          "name": "g_a",
          "type": "bytes"
        },
        {
          "name": "server_time",
          "type": "int"
        }
      ],
      "type": "Server_DH_inner_data"
    },
    "3047280218": {
      "id": 3047280218,
      "predicate": "messageActionChatEditTitle",
      "params": [
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    "3054118054": {
      "id": 3054118054,
      "predicate": "messages.stickerSet",
      "params": [
        {
          "name": "set",
          "type": "StickerSet"
        },
        {
          "name": "packs",
          "type": "Vector<StickerPack>"
        },
        {
          "name": "documents",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.StickerSet"
    },
    "3055631583": {
      "id": 3055631583,
      "predicate": "shippingOption",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "prices",
          "type": "Vector<LabeledPrice>"
        }
      ],
      "type": "ShippingOption"
    },
    "3057118639": {
      "id": 3057118639,
      "predicate": "statsDateRangeDays",
      "params": [
        {
          "name": "min_date",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        }
      ],
      "type": "StatsDateRangeDays"
    },
    "3062896985": {
      "id": 3062896985,
      "predicate": "updateChatParticipantAdmin",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "is_admin",
          "type": "Bool"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "3064709953": {
      "id": 3064709953,
      "predicate": "messages.featuredStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSetCovered>"
        },
        {
          "name": "unread",
          "type": "Vector<long>"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    "3064919984": {
      "id": 3064919984,
      "predicate": "messageActionEmpty",
      "params": [],
      "type": "MessageAction"
    },
    "3067369046": {
      "id": 3067369046,
      "predicate": "updateChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "3072226938": {
      "id": 3072226938,
      "predicate": "jsonString",
      "params": [
        {
          "name": "value",
          "type": "string"
        }
      ],
      "type": "JSONValue"
    },
    "3072515685": {
      "id": 3072515685,
      "predicate": "botInlineMessageMediaGeo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo",
          "type": "GeoPoint"
        },
        {
          "name": "period",
          "type": "int"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "BotInlineMessage"
    },
    "3075189202": {
      "id": 3075189202,
      "predicate": "contacts.contactsNotModified",
      "params": [],
      "type": "contacts.Contacts"
    },
    "3081969320": {
      "id": 3081969320,
      "predicate": "baseThemeNight",
      "params": [],
      "type": "BaseTheme"
    },
    "3099351820": {
      "id": 3099351820,
      "predicate": "inputNotifyPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "InputNotifyPeer"
    },
    "3100684255": {
      "id": 3100684255,
      "predicate": "accountDaysTTL",
      "params": [
        {
          "name": "days",
          "type": "int"
        }
      ],
      "type": "AccountDaysTTL"
    },
    "3106911949": {
      "id": 3106911949,
      "predicate": "pageListItemText",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageListItem"
    },
    "3112732367": {
      "id": 3112732367,
      "predicate": "inputUserEmpty",
      "params": [],
      "type": "InputUser"
    },
    "3132089824": {
      "id": 3132089824,
      "predicate": "pageBlockAuthorDate",
      "params": [
        {
          "name": "author",
          "type": "RichText"
        },
        {
          "name": "published_date",
          "type": "int"
        }
      ],
      "type": "PageBlock"
    },
    "3134223748": {
      "id": 3134223748,
      "predicate": "inputDocumentFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "thumb_size",
          "type": "string"
        }
      ],
      "type": "InputFileLocation"
    },
    "3134252475": {
      "id": 3134252475,
      "predicate": "peerChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Peer"
    },
    "3134751637": {
      "id": 3134751637,
      "predicate": "inputMessageReplyTo",
      "params": [
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "InputMessage"
    },
    "3135029667": {
      "id": 3135029667,
      "predicate": "pollResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "min",
          "type": "flags.0?true"
        },
        {
          "name": "results",
          "type": "flags.1?Vector<PollAnswerVoters>"
        },
        {
          "name": "total_voters",
          "type": "flags.2?int"
        },
        {
          "name": "recent_voters",
          "type": "flags.3?Vector<int>"
        },
        {
          "name": "solution",
          "type": "flags.4?string"
        },
        {
          "name": "solution_entities",
          "type": "flags.4?Vector<MessageEntity>"
        }
      ],
      "type": "PollResults"
    },
    "3144345741": {
      "id": 3144345741,
      "predicate": "channelParticipantsContacts",
      "params": [
        {
          "name": "q",
          "type": "string"
        }
      ],
      "type": "ChannelParticipantsFilter"
    },
    "3146955413": {
      "id": 3146955413,
      "predicate": "messageEntityUnknown",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "3150401885": {
      "id": 3150401885,
      "predicate": "keyboardButtonRequestPoll",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "quiz",
          "type": "flags.0?Bool"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    "3153255840": {
      "id": 3153255840,
      "predicate": "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000",
      "params": [
        {
          "name": "salt",
          "type": "bytes"
        }
      ],
      "type": "SecurePasswordKdfAlgo"
    },
    "3154794460": {
      "id": 3154794460,
      "predicate": "recentMeUrlStickerSet",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "set",
          "type": "StickerSetCovered"
        }
      ],
      "type": "RecentMeUrl"
    },
    "3157175088": {
      "id": 3157175088,
      "predicate": "privacyKeyStatusTimestamp",
      "params": [],
      "type": "PrivacyKey"
    },
    "3162085175": {
      "id": 3162085175,
      "predicate": "boolFalse",
      "params": [],
      "type": "Bool"
    },
    "3162490573": {
      "id": 3162490573,
      "predicate": "fileLocationToBeDeprecated",
      "params": [
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        }
      ],
      "type": "FileLocation"
    },
    "3172442442": {
      "id": 3172442442,
      "predicate": "topPeerCategoryGroups",
      "params": [],
      "type": "TopPeerCategory"
    },
    "3176168657": {
      "id": 3176168657,
      "predicate": "inputThemeSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "base_theme",
          "type": "BaseTheme"
        },
        {
          "name": "accent_color",
          "type": "int"
        },
        {
          "name": "message_top_color",
          "type": "flags.0?int"
        },
        {
          "name": "message_bottom_color",
          "type": "flags.0?int"
        },
        {
          "name": "wallpaper",
          "type": "flags.1?InputWallPaper"
        },
        {
          "name": "wallpaper_settings",
          "type": "flags.1?WallPaperSettings"
        }
      ],
      "type": "InputThemeSettings"
    },
    "3177253833": {
      "id": 3177253833,
      "predicate": "messageEntityBold",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "3185435954": {
      "id": 3185435954,
      "predicate": "peerChannel",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        }
      ],
      "type": "Peer"
    },
    "3187114900": {
      "id": 3187114900,
      "predicate": "stats.broadcastStats",
      "params": [
        {
          "name": "period",
          "type": "StatsDateRangeDays"
        },
        {
          "name": "followers",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "views_per_post",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "shares_per_post",
          "type": "StatsAbsValueAndPrev"
        },
        {
          "name": "enabled_notifications",
          "type": "StatsPercentValue"
        },
        {
          "name": "growth_graph",
          "type": "StatsGraph"
        },
        {
          "name": "followers_graph",
          "type": "StatsGraph"
        },
        {
          "name": "mute_graph",
          "type": "StatsGraph"
        },
        {
          "name": "top_hours_graph",
          "type": "StatsGraph"
        },
        {
          "name": "interactions_graph",
          "type": "StatsGraph"
        },
        {
          "name": "iv_interactions_graph",
          "type": "StatsGraph"
        },
        {
          "name": "views_by_source_graph",
          "type": "StatsGraph"
        },
        {
          "name": "new_followers_by_source_graph",
          "type": "StatsGraph"
        },
        {
          "name": "languages_graph",
          "type": "StatsGraph"
        },
        {
          "name": "recent_message_interactions",
          "type": "Vector<MessageInteractionCounters>"
        }
      ],
      "type": "stats.BroadcastStats"
    },
    "3187238203": {
      "id": 3187238203,
      "predicate": "game",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "document",
          "type": "flags.0?Document"
        }
      ],
      "type": "Game"
    },
    "3187344422": {
      "id": 3187344422,
      "predicate": "inputPrivacyKeyChatInvite",
      "params": [],
      "type": "InputPrivacyKey"
    },
    "3200411887": {
      "id": 3200411887,
      "predicate": "updateNotifySettings",
      "params": [
        {
          "name": "peer",
          "type": "NotifyPeer"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        }
      ],
      "type": "Update"
    },
    "3202127906": {
      "id": 3202127906,
      "predicate": "statsGraphError",
      "params": [
        {
          "name": "error",
          "type": "string"
        }
      ],
      "type": "StatsGraph"
    },
    "3204879316": {
      "id": 3204879316,
      "predicate": "messageEntityStrike",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "3209554562": {
      "id": 3209554562,
      "predicate": "pageBlockTable",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bordered",
          "type": "flags.0?true"
        },
        {
          "name": "striped",
          "type": "flags.1?true"
        },
        {
          "name": "title",
          "type": "RichText"
        },
        {
          "name": "rows",
          "type": "Vector<PageTableRow>"
        }
      ],
      "type": "PageBlock"
    },
    "3216354699": {
      "id": 3216354699,
      "predicate": "channelLocationEmpty",
      "params": [],
      "type": "ChannelLocation"
    },
    "3216634967": {
      "id": 3216634967,
      "predicate": "help.passportConfigNotModified",
      "params": [],
      "type": "help.PassportConfig"
    },
    "3218105580": {
      "id": 3218105580,
      "predicate": "pageBlockHeader",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    "3221273506": {
      "id": 3221273506,
      "predicate": "auth.sentCodeTypeSms",
      "params": [
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "auth.SentCodeType"
    },
    "3221737155": {
      "id": 3221737155,
      "predicate": "notifyChats",
      "params": [],
      "type": "NotifyPeer"
    },
    "3228621118": {
      "id": 3228621118,
      "predicate": "pageBlockPreformatted",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "language",
          "type": "string"
        }
      ],
      "type": "PageBlock"
    },
    "3235781593": {
      "id": 3235781593,
      "predicate": "jsonObjectValue",
      "params": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "value",
          "type": "JSONValue"
        }
      ],
      "type": "JSONObjectValue"
    },
    "3236054581": {
      "id": 3236054581,
      "predicate": "messages.dhConfigNotModified",
      "params": [
        {
          "name": "random",
          "type": "bytes"
        }
      ],
      "type": "messages.DhConfig"
    },
    "3238965967": {
      "id": 3238965967,
      "predicate": "inputPaymentCredentialsSaved",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "tmp_password",
          "type": "bytes"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    "3240501956": {
      "id": 3240501956,
      "predicate": "textUnderline",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    "3242007569": {
      "id": 3242007569,
      "predicate": "inputMediaVenue",
      "params": [
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "venue_id",
          "type": "string"
        },
        {
          "name": "venue_type",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    "3249626469": {
      "id": 3249626469,
      "predicate": "inputBotInlineMessageMediaGeo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "period",
          "type": "int"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        }
      ],
      "type": "InputBotInlineMessage"
    },
    "3254314650": {
      "id": 3254314650,
      "predicate": "inputMessagesFilterMyMentions",
      "params": [],
      "type": "MessagesFilter"
    },
    "3256830334": {
      "id": 3256830334,
      "predicate": "encryptedFileEmpty",
      "params": [],
      "type": "EncryptedFile"
    },
    "3258394569": {
      "id": 3258394569,
      "predicate": "account.passwordInputSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "new_algo",
          "type": "flags.0?PasswordKdfAlgo"
        },
        {
          "name": "new_password_hash",
          "type": "flags.0?bytes"
        },
        {
          "name": "hint",
          "type": "flags.0?string"
        },
        {
          "name": "email",
          "type": "flags.1?string"
        },
        {
          "name": "new_secure_settings",
          "type": "flags.2?SecureSecretSettings"
        }
      ],
      "type": "account.PasswordInputSettings"
    },
    "3258570374": {
      "id": 3258570374,
      "predicate": "inputWebFileLocation",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputWebFileLocation"
    },
    "3262826695": {
      "id": 3262826695,
      "predicate": "botCommand",
      "params": [
        {
          "name": "command",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        }
      ],
      "type": "BotCommand"
    },
    "3272254296": {
      "id": 3272254296,
      "predicate": "invoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "test",
          "type": "flags.0?true"
        },
        {
          "name": "name_requested",
          "type": "flags.1?true"
        },
        {
          "name": "phone_requested",
          "type": "flags.2?true"
        },
        {
          "name": "email_requested",
          "type": "flags.3?true"
        },
        {
          "name": "shipping_address_requested",
          "type": "flags.4?true"
        },
        {
          "name": "flexible",
          "type": "flags.5?true"
        },
        {
          "name": "phone_to_provider",
          "type": "flags.6?true"
        },
        {
          "name": "email_to_provider",
          "type": "flags.7?true"
        },
        {
          "name": "currency",
          "type": "string"
        },
        {
          "name": "prices",
          "type": "Vector<LabeledPrice>"
        }
      ],
      "type": "Invoice"
    },
    "3274827786": {
      "id": 3274827786,
      "predicate": "inputGameShortName",
      "params": [
        {
          "name": "bot_id",
          "type": "InputUser"
        },
        {
          "name": "short_name",
          "type": "string"
        }
      ],
      "type": "InputGame"
    },
    "3279233481": {
      "id": 3279233481,
      "predicate": "updateDeleteChannelMessages",
      "params": [
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "messages",
          "type": "Vector<int>"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "3282117730": {
      "id": 3282117730,
      "predicate": "baseThemeClassic",
      "params": [],
      "type": "BaseTheme"
    },
    "3294258486": {
      "id": 3294258486,
      "predicate": "help.noAppUpdate",
      "params": [],
      "type": "help.AppUpdate"
    },
    "3300522427": {
      "id": 3300522427,
      "predicate": "error",
      "params": [
        {
          "name": "code",
          "type": "int"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "Error"
    },
    "3313949212": {
      "id": 3313949212,
      "predicate": "webPagePending",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "WebPage"
    },
    "3336309862": {
      "id": 3336309862,
      "predicate": "messages.featuredStickersNotModified",
      "params": [
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    "3342098026": {
      "id": 3342098026,
      "predicate": "jsonBool",
      "params": [
        {
          "name": "value",
          "type": "Bool"
        }
      ],
      "type": "JSONValue"
    },
    "3355139585": {
      "id": 3355139585,
      "predicate": "textSuperscript",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    "3363328638": {
      "id": 3363328638,
      "predicate": "encryptedChatRequested",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_a",
          "type": "bytes"
        }
      ],
      "type": "EncryptedChat"
    },
    "3369552190": {
      "id": 3369552190,
      "predicate": "chatParticipant",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChatParticipant"
    },
    "3371027998": {
      "id": 3371027998,
      "predicate": "messages.messagesSlice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inexact",
          "type": "flags.1?true"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "next_rate",
          "type": "flags.0?int"
        },
        {
          "name": "messages",
          "type": "Vector<Message>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.Messages"
    },
    "3380800186": {
      "id": 3380800186,
      "predicate": "cdnPublicKey",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "public_key",
          "type": "string"
        }
      ],
      "type": "CdnPublicKey"
    },
    "3389379854": {
      "id": 3389379854,
      "predicate": "inputPaymentCredentialsAndroidPay",
      "params": [
        {
          "name": "payment_token",
          "type": "DataJSON"
        },
        {
          "name": "google_transaction_id",
          "type": "string"
        }
      ],
      "type": "InputPaymentCredentials"
    },
    "3393592157": {
      "id": 3393592157,
      "predicate": "peerLocated",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "expires",
          "type": "int"
        },
        {
          "name": "distance",
          "type": "int"
        }
      ],
      "type": "PeerLocated"
    },
    "3402187762": {
      "id": 3402187762,
      "predicate": "webAuthorization",
      "params": [
        {
          "name": "hash",
          "type": "long"
        },
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "domain",
          "type": "string"
        },
        {
          "name": "browser",
          "type": "string"
        },
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "date_created",
          "type": "int"
        },
        {
          "name": "date_active",
          "type": "int"
        },
        {
          "name": "ip",
          "type": "string"
        },
        {
          "name": "region",
          "type": "string"
        }
      ],
      "type": "WebAuthorization"
    },
    "3402727926": {
      "id": 3402727926,
      "predicate": "langPackString",
      "params": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "value",
          "type": "string"
        }
      ],
      "type": "LangPackString"
    },
    "3403786975": {
      "id": 3403786975,
      "predicate": "storage.fileGif",
      "params": [],
      "type": "storage.FileType"
    },
    "3408489464": {
      "id": 3408489464,
      "predicate": "labeledPrice",
      "params": [
        {
          "name": "label",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "long"
        }
      ],
      "type": "LabeledPrice"
    },
    "3410210014": {
      "id": 3410210014,
      "predicate": "statsAbsValueAndPrev",
      "params": [
        {
          "name": "current",
          "type": "double"
        },
        {
          "name": "previous",
          "type": "double"
        }
      ],
      "type": "StatsAbsValueAndPrev"
    },
    "3418877480": {
      "id": 3418877480,
      "predicate": "inputSecureFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    "3419287520": {
      "id": 3419287520,
      "predicate": "statsPercentValue",
      "params": [
        {
          "name": "part",
          "type": "double"
        },
        {
          "name": "total",
          "type": "double"
        }
      ],
      "type": "StatsPercentValue"
    },
    "3420659238": {
      "id": 3420659238,
      "predicate": "secureValueTypeAddress",
      "params": [],
      "type": "SecureValueType"
    },
    "3421653312": {
      "id": 3421653312,
      "predicate": "messageMediaContact",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "MessageMedia"
    },
    "3435051951": {
      "id": 3435051951,
      "predicate": "channelParticipantAdmin",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_edit",
          "type": "flags.0?true"
        },
        {
          "name": "self",
          "type": "flags.1?true"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "flags.1?int"
        },
        {
          "name": "promoted_by",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_rights",
          "type": "ChatAdminRights"
        },
        {
          "name": "rank",
          "type": "flags.2?string"
        }
      ],
      "type": "ChannelParticipant"
    },
    "3439659286": {
      "id": 3439659286,
      "predicate": "auth.authorization",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "tmp_sessions",
          "type": "flags.0?int"
        },
        {
          "name": "user",
          "type": "User"
        }
      ],
      "type": "auth.Authorization"
    },
    "3447183703": {
      "id": 3447183703,
      "predicate": "channelMessagesFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_new_messages",
          "type": "flags.1?true"
        },
        {
          "name": "ranges",
          "type": "Vector<MessageRange>"
        }
      ],
      "type": "ChannelMessagesFilter"
    },
    "3447252358": {
      "id": 3447252358,
      "predicate": "rpc_answer_dropped_running",
      "params": [],
      "type": "RpcDropAnswer"
    },
    "3452074527": {
      "id": 3452074527,
      "predicate": "paymentSavedCredentialsCard",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "PaymentSavedCredentials"
    },
    "3456972720": {
      "id": 3456972720,
      "predicate": "pageBlockAnchor",
      "params": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "PageBlock"
    },
    "3461251837": {
      "id": 3461251837,
      "predicate": "inputMediaGeoLive",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "stopped",
          "type": "flags.0?true"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "period",
          "type": "flags.1?int"
        }
      ],
      "type": "InputMedia"
    },
    "3489825848": {
      "id": 3489825848,
      "predicate": "importedContact",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "client_id",
          "type": "long"
        }
      ],
      "type": "ImportedContact"
    },
    "3492708308": {
      "id": 3492708308,
      "predicate": "inputKeyboardButtonUrlAuth",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "request_write_access",
          "type": "flags.0?true"
        },
        {
          "name": "text",
          "type": "string"
        },
        {
          "name": "fwd_text",
          "type": "flags.1?string"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "bot",
          "type": "InputUser"
        }
      ],
      "type": "KeyboardButton"
    },
    "3497176244": {
      "id": 3497176244,
      "predicate": "restrictionReason",
      "params": [
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "reason",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "RestrictionReason"
    },
    "3497329829": {
      "id": 3497329829,
      "predicate": "photo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_stickers",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "sizes",
          "type": "Vector<PhotoSize>"
        },
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "Photo"
    },
    "3503927651": {
      "id": 3503927651,
      "predicate": "channels.channelParticipant",
      "params": [
        {
          "name": "participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "channels.ChannelParticipant"
    },
    "3504867164": {
      "id": 3504867164,
      "predicate": "server_DH_params_ok",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "encrypted_answer",
          "type": "bytes"
        }
      ],
      "type": "Server_DH_Params"
    },
    "3508640733": {
      "id": 3508640733,
      "predicate": "inputPrivacyKeyAddedByPhone",
      "params": [],
      "type": "InputPrivacyKey"
    },
    "3510966403": {
      "id": 3510966403,
      "predicate": "payments.validatedRequestedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "flags.0?string"
        },
        {
          "name": "shipping_options",
          "type": "flags.1?Vector<ShippingOption>"
        }
      ],
      "type": "payments.ValidatedRequestedInfo"
    },
    "3516589165": {
      "id": 3516589165,
      "predicate": "privacyKeyPhoneNumber",
      "params": [],
      "type": "PrivacyKey"
    },
    "3520285222": {
      "id": 3520285222,
      "predicate": "sendMessageUploadPhotoAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    "3531600002": {
      "id": 3531600002,
      "predicate": "inputCheckPasswordSRP",
      "params": [
        {
          "name": "srp_id",
          "type": "long"
        },
        {
          "name": "A",
          "type": "bytes"
        },
        {
          "name": "M1",
          "type": "bytes"
        }
      ],
      "type": "InputCheckPasswordSRP"
    },
    "3541734942": {
      "id": 3541734942,
      "predicate": "channel",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "creator",
          "type": "flags.0?true"
        },
        {
          "name": "left",
          "type": "flags.2?true"
        },
        {
          "name": "broadcast",
          "type": "flags.5?true"
        },
        {
          "name": "verified",
          "type": "flags.7?true"
        },
        {
          "name": "megagroup",
          "type": "flags.8?true"
        },
        {
          "name": "restricted",
          "type": "flags.9?true"
        },
        {
          "name": "signatures",
          "type": "flags.11?true"
        },
        {
          "name": "min",
          "type": "flags.12?true"
        },
        {
          "name": "scam",
          "type": "flags.19?true"
        },
        {
          "name": "has_link",
          "type": "flags.20?true"
        },
        {
          "name": "has_geo",
          "type": "flags.21?true"
        },
        {
          "name": "slowmode_enabled",
          "type": "flags.22?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "flags.13?long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "username",
          "type": "flags.6?string"
        },
        {
          "name": "photo",
          "type": "ChatPhoto"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "restriction_reason",
          "type": "flags.9?Vector<RestrictionReason>"
        },
        {
          "name": "admin_rights",
          "type": "flags.14?ChatAdminRights"
        },
        {
          "name": "banned_rights",
          "type": "flags.15?ChatBannedRights"
        },
        {
          "name": "default_banned_rights",
          "type": "flags.18?ChatBannedRights"
        },
        {
          "name": "participants_count",
          "type": "flags.17?int"
        }
      ],
      "type": "Chat"
    },
    "3544138739": {
      "id": 3544138739,
      "predicate": "inputMediaGame",
      "params": [
        {
          "name": "id",
          "type": "InputGame"
        }
      ],
      "type": "InputMedia"
    },
    "3546811489": {
      "id": 3546811489,
      "predicate": "contactStatus",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "status",
          "type": "UserStatus"
        }
      ],
      "type": "ContactStatus"
    },
    "3562713238": {
      "id": 3562713238,
      "predicate": "passwordKdfAlgoUnknown",
      "params": [],
      "type": "PasswordKdfAlgo"
    },
    "3576656887": {
      "id": 3576656887,
      "predicate": "sendMessageRecordAudioAction",
      "params": [],
      "type": "SendMessageAction"
    },
    "3580323600": {
      "id": 3580323600,
      "predicate": "channelAdminLogEventActionParticipantToggleAdmin",
      "params": [
        {
          "name": "prev_participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "new_participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "3585325561": {
      "id": 3585325561,
      "predicate": "emojiKeyword",
      "params": [
        {
          "name": "keyword",
          "type": "string"
        },
        {
          "name": "emoticons",
          "type": "Vector<string>"
        }
      ],
      "type": "EmojiKeyword"
    },
    "3591563503": {
      "id": 3591563503,
      "predicate": "notifyBroadcasts",
      "params": [],
      "type": "NotifyPeer"
    },
    "3597362889": {
      "id": 3597362889,
      "predicate": "inputPrivacyValueDisallowAll",
      "params": [],
      "type": "InputPrivacyRule"
    },
    "3626197935": {
      "id": 3626197935,
      "predicate": "inputPrivacyValueDisallowChatParticipants",
      "params": [
        {
          "name": "chats",
          "type": "Vector<int>"
        }
      ],
      "type": "InputPrivacyRule"
    },
    "3626575894": {
      "id": 3626575894,
      "predicate": "inputUser",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputUser"
    },
    "3627312883": {
      "id": 3627312883,
      "predicate": "inputPhotoLegacyFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        },
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        },
        {
          "name": "secret",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    "3628142905": {
      "id": 3628142905,
      "predicate": "payments.paymentVerificationNeeded",
      "params": [
        {
          "name": "url",
          "type": "string"
        }
      ],
      "type": "payments.PaymentResult"
    },
    "3641877916": {
      "id": 3641877916,
      "predicate": "textItalic",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    "3646710100": {
      "id": 3646710100,
      "predicate": "messageActionSecureValuesSent",
      "params": [
        {
          "name": "types",
          "type": "Vector<SecureValueType>"
        }
      ],
      "type": "MessageAction"
    },
    "3658699658": {
      "id": 3658699658,
      "predicate": "chatParticipantCreator",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        }
      ],
      "type": "ChatParticipant"
    },
    "3664378706": {
      "id": 3664378706,
      "predicate": "msgs_state_req",
      "params": [
        {
          "name": "msg_ids",
          "type": "Vector<long>"
        }
      ],
      "type": "MsgsStateReq"
    },
    "3676352904": {
      "id": 3676352904,
      "predicate": "pageBlockDivider",
      "params": [],
      "type": "PageBlock"
    },
    "3676426407": {
      "id": 3676426407,
      "predicate": "inputSecureValue",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "data",
          "type": "flags.0?SecureData"
        },
        {
          "name": "front_side",
          "type": "flags.1?InputSecureFile"
        },
        {
          "name": "reverse_side",
          "type": "flags.2?InputSecureFile"
        },
        {
          "name": "selfie",
          "type": "flags.3?InputSecureFile"
        },
        {
          "name": "translation",
          "type": "flags.6?Vector<InputSecureFile>"
        },
        {
          "name": "files",
          "type": "flags.4?Vector<InputSecureFile>"
        },
        {
          "name": "plain_data",
          "type": "flags.5?SecurePlainData"
        }
      ],
      "type": "InputSecureValue"
    },
    "3680828724": {
      "id": 3680828724,
      "predicate": "account.tmpPassword",
      "params": [
        {
          "name": "tmp_password",
          "type": "bytes"
        },
        {
          "name": "valid_until",
          "type": "int"
        }
      ],
      "type": "account.TmpPassword"
    },
    "3684593874": {
      "id": 3684593874,
      "predicate": "inputPrivacyKeyPhoneP2P",
      "params": [],
      "type": "InputPrivacyKey"
    },
    "3688169197": {
      "id": 3688169197,
      "predicate": "inputReportReasonGeoIrrelevant",
      "params": [],
      "type": "ReportReason"
    },
    "3695018575": {
      "id": 3695018575,
      "predicate": "textEmpty",
      "params": [],
      "type": "RichText"
    },
    "3714748232": {
      "id": 3714748232,
      "predicate": "sendMessageGamePlayAction",
      "params": [],
      "type": "SendMessageAction"
    },
    "3727060725": {
      "id": 3727060725,
      "predicate": "contacts.topPeersNotModified",
      "params": [],
      "type": "contacts.TopPeers"
    },
    "3728686201": {
      "id": 3728686201,
      "predicate": "channelParticipantsRecent",
      "params": [],
      "type": "ChannelParticipantsFilter"
    },
    "3730443734": {
      "id": 3730443734,
      "predicate": "textEmail",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        },
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "RichText"
    },
    "3737042563": {
      "id": 3737042563,
      "predicate": "codeSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "allow_flashcall",
          "type": "flags.0?true"
        },
        {
          "name": "current_number",
          "type": "flags.1?true"
        },
        {
          "name": "allow_app_hash",
          "type": "flags.4?true"
        }
      ],
      "type": "CodeSettings"
    },
    "3751189549": {
      "id": 3751189549,
      "predicate": "auth.exportedAuthorization",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "auth.ExportedAuthorization"
    },
    "3754096014": {
      "id": 3754096014,
      "predicate": "chatInvite",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel",
          "type": "flags.0?true"
        },
        {
          "name": "broadcast",
          "type": "flags.1?true"
        },
        {
          "name": "public",
          "type": "flags.2?true"
        },
        {
          "name": "megagroup",
          "type": "flags.3?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "Photo"
        },
        {
          "name": "participants_count",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "flags.4?Vector<User>"
        }
      ],
      "type": "ChatInvite"
    },
    "3755650017": {
      "id": 3755650017,
      "predicate": "inputFileLocation",
      "params": [
        {
          "name": "volume_id",
          "type": "long"
        },
        {
          "name": "local_id",
          "type": "int"
        },
        {
          "name": "secret",
          "type": "long"
        },
        {
          "name": "file_reference",
          "type": "bytes"
        }
      ],
      "type": "InputFileLocation"
    },
    "3760683618": {
      "id": 3760683618,
      "predicate": "secureFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "secret",
          "type": "bytes"
        }
      ],
      "type": "SecureFile"
    },
    "3762434803": {
      "id": 3762434803,
      "predicate": "autoDownloadSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "disabled",
          "type": "flags.0?true"
        },
        {
          "name": "video_preload_large",
          "type": "flags.1?true"
        },
        {
          "name": "audio_preload_next",
          "type": "flags.2?true"
        },
        {
          "name": "phonecalls_less_data",
          "type": "flags.3?true"
        },
        {
          "name": "photo_size_max",
          "type": "int"
        },
        {
          "name": "video_size_max",
          "type": "int"
        },
        {
          "name": "file_size_max",
          "type": "int"
        },
        {
          "name": "video_upload_maxbitrate",
          "type": "int"
        }
      ],
      "type": "AutoDownloadSettings"
    },
    "3764405938": {
      "id": 3764405938,
      "predicate": "msg_copy",
      "params": [
        {
          "name": "orig_message",
          "type": "Message"
        }
      ],
      "type": "MessageCopy"
    },
    "3764575107": {
      "id": 3764575107,
      "predicate": "inputMessagesFilterContacts",
      "params": [],
      "type": "MessagesFilter"
    },
    "3767910816": {
      "id": 3767910816,
      "predicate": "phoneCallDiscardReasonDisconnect",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    "3769678894": {
      "id": 3769678894,
      "predicate": "photoStrippedSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "PhotoSize"
    },
    "3770729957": {
      "id": 3770729957,
      "predicate": "pageTableRow",
      "params": [
        {
          "name": "cells",
          "type": "Vector<PageTableCell>"
        }
      ],
      "type": "PageTableRow"
    },
    "3771582784": {
      "id": 3771582784,
      "predicate": "updateBotShippingQuery",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "shipping_address",
          "type": "PostAddress"
        }
      ],
      "type": "Update"
    },
    "3775771465": {
      "id": 3775771465,
      "predicate": "updateChatPinnedMessage",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "3781450179": {
      "id": 3781450179,
      "predicate": "updateDialogUnreadMark",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "unread",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "DialogPeer"
        }
      ],
      "type": "Update"
    },
    "3782503690": {
      "id": 3782503690,
      "predicate": "inputReportReasonOther",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "ReportReason"
    },
    "3793765884": {
      "id": 3793765884,
      "predicate": "destroy_session_ok",
      "params": [
        {
          "name": "session_id",
          "type": "long"
        }
      ],
      "type": "DestroySessionRes"
    },
    "3798942449": {
      "id": 3798942449,
      "predicate": "userStatusRecently",
      "params": [],
      "type": "UserStatus"
    },
    "3805733942": {
      "id": 3805733942,
      "predicate": "chatParticipantAdmin",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "ChatParticipant"
    },
    "3809980286": {
      "id": 3809980286,
      "predicate": "updatesTooLong",
      "params": [],
      "type": "Updates"
    },
    "3810276568": {
      "id": 3810276568,
      "predicate": "channelAdminLogEventActionParticipantInvite",
      "params": [
        {
          "name": "participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "3811614591": {
      "id": 3811614591,
      "predicate": "help.termsOfServiceUpdateEmpty",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "help.TermsOfServiceUpdate"
    },
    "3825430691": {
      "id": 3825430691,
      "predicate": "updateEditMessage",
      "params": [
        {
          "name": "message",
          "type": "Message"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_count",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "3831077821": {
      "id": 3831077821,
      "predicate": "messages.stickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "stickers",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.Stickers"
    },
    "3837862870": {
      "id": 3837862870,
      "predicate": "inputGeoPointEmpty",
      "params": [],
      "type": "InputGeoPoint"
    },
    "3840442385": {
      "id": 3840442385,
      "predicate": "pageBlockList",
      "params": [
        {
          "name": "items",
          "type": "Vector<PageListItem>"
        }
      ],
      "type": "PageBlock"
    },
    "3843135853": {
      "id": 3843135853,
      "predicate": "updateFavedStickers",
      "params": [],
      "type": "Update"
    },
    "3845639894": {
      "id": 3845639894,
      "predicate": "secureValueErrorSelfie",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "file_hash",
          "type": "bytes"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    "3849174789": {
      "id": 3849174789,
      "predicate": "dialogPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        }
      ],
      "type": "DialogPeer"
    },
    "3854302746": {
      "id": 3854302746,
      "predicate": "inputMediaPhotoExternal",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    "3856126364": {
      "id": 3856126364,
      "predicate": "messages.chatFull",
      "params": [
        {
          "name": "full_chat",
          "type": "ChatFull"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "messages.ChatFull"
    },
    "3861952889": {
      "id": 3861952889,
      "predicate": "inputWallPaper",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputWallPaper"
    },
    "3866083195": {
      "id": 3866083195,
      "predicate": "inputMediaDice",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    "3867103758": {
      "id": 3867103758,
      "predicate": "inputStickerSetDice",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        }
      ],
      "type": "InputStickerSet"
    },
    "3872931198": {
      "id": 3872931198,
      "predicate": "channelAdminLogEventActionParticipantToggleBan",
      "params": [
        {
          "name": "prev_participant",
          "type": "ChannelParticipant"
        },
        {
          "name": "new_participant",
          "type": "ChannelParticipant"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "3873421349": {
      "id": 3873421349,
      "predicate": "channelAdminLogEventActionChangeTitle",
      "params": [
        {
          "name": "prev_value",
          "type": "string"
        },
        {
          "name": "new_value",
          "type": "string"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "3875695885": {
      "id": 3875695885,
      "predicate": "inputMessagesFilterGeo",
      "params": [],
      "type": "MessagesFilter"
    },
    "3879028705": {
      "id": 3879028705,
      "predicate": "updateBotCallbackQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "chat_instance",
          "type": "long"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        },
        {
          "name": "game_short_name",
          "type": "flags.1?string"
        }
      ],
      "type": "Update"
    },
    "3892468898": {
      "id": 3892468898,
      "predicate": "messages.savedGifsNotModified",
      "params": [],
      "type": "messages.SavedGifs"
    },
    "3896830975": {
      "id": 3896830975,
      "predicate": "messages.searchCounter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "inexact",
          "type": "flags.1?true"
        },
        {
          "name": "filter",
          "type": "MessagesFilter"
        },
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.SearchCounter"
    },
    "3898999491": {
      "id": 3898999491,
      "predicate": "messages.allStickersNotModified",
      "params": [],
      "type": "messages.AllStickers"
    },
    "3902555570": {
      "id": 3902555570,
      "predicate": "webPage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "display_url",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "type",
          "type": "flags.0?string"
        },
        {
          "name": "site_name",
          "type": "flags.1?string"
        },
        {
          "name": "title",
          "type": "flags.2?string"
        },
        {
          "name": "description",
          "type": "flags.3?string"
        },
        {
          "name": "photo",
          "type": "flags.4?Photo"
        },
        {
          "name": "embed_url",
          "type": "flags.5?string"
        },
        {
          "name": "embed_type",
          "type": "flags.5?string"
        },
        {
          "name": "embed_width",
          "type": "flags.6?int"
        },
        {
          "name": "embed_height",
          "type": "flags.6?int"
        },
        {
          "name": "duration",
          "type": "flags.7?int"
        },
        {
          "name": "author",
          "type": "flags.8?string"
        },
        {
          "name": "document",
          "type": "flags.9?Document"
        },
        {
          "name": "cached_page",
          "type": "flags.10?Page"
        },
        {
          "name": "attributes",
          "type": "flags.12?Vector<WebPageAttribute>"
        }
      ],
      "type": "WebPage"
    },
    "3903065049": {
      "id": 3903065049,
      "predicate": "secureValueErrorData",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "data_hash",
          "type": "bytes"
        },
        {
          "name": "field",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "SecureValueError"
    },
    "3916839660": {
      "id": 3916839660,
      "predicate": "sendMessageUploadVideoAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    "3920049402": {
      "id": 3920049402,
      "predicate": "photoCachedSize",
      "params": [
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "location",
          "type": "FileLocation"
        },
        {
          "name": "w",
          "type": "int"
        },
        {
          "name": "h",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "PhotoSize"
    },
    "3921323624": {
      "id": 3921323624,
      "predicate": "folderPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "FolderPeer"
    },
    "3924306968": {
      "id": 3924306968,
      "predicate": "channelAdminLogEventActionUpdatePinned",
      "params": [
        {
          "name": "message",
          "type": "Message"
        }
      ],
      "type": "ChannelAdminLogEventAction"
    },
    "3926049406": {
      "id": 3926049406,
      "predicate": "paymentCharge",
      "params": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "provider_charge_id",
          "type": "string"
        }
      ],
      "type": "PaymentCharge"
    },
    "3926060083": {
      "id": 3926060083,
      "predicate": "secureValueTypeTemporaryRegistration",
      "params": [],
      "type": "SecureValueType"
    },
    "3926948580": {
      "id": 3926948580,
      "predicate": "channelAdminLogEventsFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "join",
          "type": "flags.0?true"
        },
        {
          "name": "leave",
          "type": "flags.1?true"
        },
        {
          "name": "invite",
          "type": "flags.2?true"
        },
        {
          "name": "ban",
          "type": "flags.3?true"
        },
        {
          "name": "unban",
          "type": "flags.4?true"
        },
        {
          "name": "kick",
          "type": "flags.5?true"
        },
        {
          "name": "unkick",
          "type": "flags.6?true"
        },
        {
          "name": "promote",
          "type": "flags.7?true"
        },
        {
          "name": "demote",
          "type": "flags.8?true"
        },
        {
          "name": "info",
          "type": "flags.9?true"
        },
        {
          "name": "settings",
          "type": "flags.10?true"
        },
        {
          "name": "pinned",
          "type": "flags.11?true"
        },
        {
          "name": "edit",
          "type": "flags.12?true"
        },
        {
          "name": "delete",
          "type": "flags.13?true"
        }
      ],
      "type": "ChannelAdminLogEventsFilter"
    },
    "3926956819": {
      "id": 3926956819,
      "predicate": "destroy_auth_key_fail",
      "params": [],
      "type": "DestroyAuthKeyRes"
    },
    "3930787420": {
      "id": 3930787420,
      "predicate": "updateChatParticipantAdd",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "inviter_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        }
      ],
      "type": "Update"
    },
    "3941105218": {
      "id": 3941105218,
      "predicate": "contacts.contacts",
      "params": [
        {
          "name": "contacts",
          "type": "Vector<Contact>"
        },
        {
          "name": "saved_count",
          "type": "int"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "contacts.Contacts"
    },
    "3942934523": {
      "id": 3942934523,
      "predicate": "updateChannelTooLong",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel_id",
          "type": "int"
        },
        {
          "name": "pts",
          "type": "flags.0?int"
        }
      ],
      "type": "Update"
    },
    "3943987176": {
      "id": 3943987176,
      "predicate": "webPageEmpty",
      "params": [
        {
          "name": "id",
          "type": "long"
        }
      ],
      "type": "WebPage"
    },
    "3947431965": {
      "id": 3947431965,
      "predicate": "recentMeUrlChatInvite",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "chat_invite",
          "type": "ChatInvite"
        }
      ],
      "type": "RecentMeUrl"
    },
    "3957614617": {
      "id": 3957614617,
      "predicate": "updateServiceNotification",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "popup",
          "type": "flags.0?true"
        },
        {
          "name": "inbox_date",
          "type": "flags.1?int"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "media",
          "type": "MessageMedia"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        }
      ],
      "type": "Update"
    },
    "3968000320": {
      "id": 3968000320,
      "predicate": "phone.phoneCall",
      "params": [
        {
          "name": "phone_call",
          "type": "PhoneCall"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "phone.PhoneCall"
    },
    "3973537164": {
      "id": 3973537164,
      "predicate": "userProfilePhoto",
      "params": [
        {
          "name": "photo_id",
          "type": "long"
        },
        {
          "name": "photo_small",
          "type": "FileLocation"
        },
        {
          "name": "photo_big",
          "type": "FileLocation"
        },
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "UserProfilePhoto"
    },
    "3977822488": {
      "id": 3977822488,
      "predicate": "encryptedMessage",
      "params": [
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        },
        {
          "name": "file",
          "type": "EncryptedFile"
        }
      ],
      "type": "EncryptedMessage"
    },
    "3978218928": {
      "id": 3978218928,
      "predicate": "secureValueHash",
      "params": [
        {
          "name": "type",
          "type": "SecureValueType"
        },
        {
          "name": "hash",
          "type": "bytes"
        }
      ],
      "type": "SecureValueHash"
    },
    "3981887996": {
      "id": 3981887996,
      "predicate": "account.webAuthorizations",
      "params": [
        {
          "name": "authorizations",
          "type": "Vector<WebAuthorization>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "account.WebAuthorizations"
    },
    "3983181060": {
      "id": 3983181060,
      "predicate": "textSubscript",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "RichText"
    },
    "3985307469": {
      "id": 3985307469,
      "predicate": "channels.adminLogResults",
      "params": [
        {
          "name": "events",
          "type": "Vector<ChannelAdminLogEvent>"
        },
        {
          "name": "chats",
          "type": "Vector<Chat>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "channels.AdminLogResults"
    },
    "3987424379": {
      "id": 3987424379,
      "predicate": "bad_server_salt",
      "params": [
        {
          "name": "bad_msg_id",
          "type": "long"
        },
        {
          "name": "bad_msg_seqno",
          "type": "int"
        },
        {
          "name": "error_code",
          "type": "int"
        },
        {
          "name": "new_server_salt",
          "type": "long"
        }
      ],
      "type": "BadMsgNotification"
    },
    "3988339017": {
      "id": 3988339017,
      "predicate": "userStatusOnline",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "UserStatus"
    },
    "3989684315": {
      "id": 3989684315,
      "predicate": "topPeer",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "rating",
          "type": "double"
        }
      ],
      "type": "TopPeer"
    },
    "3992026130": {
      "id": 3992026130,
      "predicate": "userFull",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "blocked",
          "type": "flags.0?true"
        },
        {
          "name": "phone_calls_available",
          "type": "flags.4?true"
        },
        {
          "name": "phone_calls_private",
          "type": "flags.5?true"
        },
        {
          "name": "can_pin_message",
          "type": "flags.7?true"
        },
        {
          "name": "has_scheduled",
          "type": "flags.12?true"
        },
        {
          "name": "user",
          "type": "User"
        },
        {
          "name": "about",
          "type": "flags.1?string"
        },
        {
          "name": "settings",
          "type": "PeerSettings"
        },
        {
          "name": "profile_photo",
          "type": "flags.2?Photo"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "bot_info",
          "type": "flags.3?BotInfo"
        },
        {
          "name": "pinned_msg_id",
          "type": "flags.6?int"
        },
        {
          "name": "common_chats_count",
          "type": "int"
        },
        {
          "name": "folder_id",
          "type": "flags.11?int"
        }
      ],
      "type": "UserFull"
    },
    "3992797279": {
      "id": 3992797279,
      "predicate": "messages.allStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "sets",
          "type": "Vector<StickerSet>"
        }
      ],
      "type": "messages.AllStickers"
    },
    "3995842921": {
      "id": 3995842921,
      "predicate": "updateDraftMessage",
      "params": [
        {
          "name": "peer",
          "type": "Peer"
        },
        {
          "name": "draft",
          "type": "DraftMessage"
        }
      ],
      "type": "Update"
    },
    "3996854058": {
      "id": 3996854058,
      "predicate": "updatePrivacy",
      "params": [
        {
          "name": "key",
          "type": "PrivacyKey"
        },
        {
          "name": "rules",
          "type": "Vector<PrivacyRule>"
        }
      ],
      "type": "Update"
    },
    "4002160262": {
      "id": 4002160262,
      "predicate": "inputChannelEmpty",
      "params": [],
      "type": "InputChannel"
    },
    "4004045934": {
      "id": 4004045934,
      "predicate": "upload.cdnFileReuploadNeeded",
      "params": [
        {
          "name": "request_token",
          "type": "bytes"
        }
      ],
      "type": "upload.CdnFile"
    },
    "4004802343": {
      "id": 4004802343,
      "predicate": "stickerSet",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "archived",
          "type": "flags.1?true"
        },
        {
          "name": "official",
          "type": "flags.2?true"
        },
        {
          "name": "masks",
          "type": "flags.3?true"
        },
        {
          "name": "animated",
          "type": "flags.5?true"
        },
        {
          "name": "installed_date",
          "type": "flags.0?int"
        },
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "thumb",
          "type": "flags.4?PhotoSize"
        },
        {
          "name": "thumb_dc_id",
          "type": "flags.4?int"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "StickerSet"
    },
    "4006239459": {
      "id": 4006239459,
      "predicate": "langPackLanguage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "official",
          "type": "flags.0?true"
        },
        {
          "name": "rtl",
          "type": "flags.2?true"
        },
        {
          "name": "beta",
          "type": "flags.3?true"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "native_name",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "base_lang_code",
          "type": "flags.1?string"
        },
        {
          "name": "plural_code",
          "type": "string"
        },
        {
          "name": "strings_count",
          "type": "int"
        },
        {
          "name": "translated_count",
          "type": "int"
        },
        {
          "name": "translations_url",
          "type": "string"
        }
      ],
      "type": "LangPackLanguage"
    },
    "4011282869": {
      "id": 4011282869,
      "predicate": "pageBlockChannel",
      "params": [
        {
          "name": "channel",
          "type": "Chat"
        }
      ],
      "type": "PageBlock"
    },
    "4028055529": {
      "id": 4028055529,
      "predicate": "channels.channelParticipantsNotModified",
      "params": [],
      "type": "channels.ChannelParticipants"
    },
    "4030849616": {
      "id": 4030849616,
      "predicate": "chatOnlines",
      "params": [
        {
          "name": "onlines",
          "type": "int"
        }
      ],
      "type": "ChatOnlines"
    },
    "4041467286": {
      "id": 4041467286,
      "predicate": "messages.dialogsNotModified",
      "params": [
        {
          "name": "count",
          "type": "int"
        }
      ],
      "type": "messages.Dialogs"
    },
    "4041631530": {
      "id": 4041631530,
      "predicate": "channelFull",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "can_view_participants",
          "type": "flags.3?true"
        },
        {
          "name": "can_set_username",
          "type": "flags.6?true"
        },
        {
          "name": "can_set_stickers",
          "type": "flags.7?true"
        },
        {
          "name": "hidden_prehistory",
          "type": "flags.10?true"
        },
        {
          "name": "can_view_stats",
          "type": "flags.12?true"
        },
        {
          "name": "can_set_location",
          "type": "flags.16?true"
        },
        {
          "name": "has_scheduled",
          "type": "flags.19?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "participants_count",
          "type": "flags.0?int"
        },
        {
          "name": "admins_count",
          "type": "flags.1?int"
        },
        {
          "name": "kicked_count",
          "type": "flags.2?int"
        },
        {
          "name": "banned_count",
          "type": "flags.2?int"
        },
        {
          "name": "online_count",
          "type": "flags.13?int"
        },
        {
          "name": "read_inbox_max_id",
          "type": "int"
        },
        {
          "name": "read_outbox_max_id",
          "type": "int"
        },
        {
          "name": "unread_count",
          "type": "int"
        },
        {
          "name": "chat_photo",
          "type": "Photo"
        },
        {
          "name": "notify_settings",
          "type": "PeerNotifySettings"
        },
        {
          "name": "exported_invite",
          "type": "ExportedChatInvite"
        },
        {
          "name": "bot_info",
          "type": "Vector<BotInfo>"
        },
        {
          "name": "migrated_from_chat_id",
          "type": "flags.4?int"
        },
        {
          "name": "migrated_from_max_id",
          "type": "flags.4?int"
        },
        {
          "name": "pinned_msg_id",
          "type": "flags.5?int"
        },
        {
          "name": "stickerset",
          "type": "flags.8?StickerSet"
        },
        {
          "name": "available_min_id",
          "type": "flags.9?int"
        },
        {
          "name": "folder_id",
          "type": "flags.11?int"
        },
        {
          "name": "linked_chat_id",
          "type": "flags.14?int"
        },
        {
          "name": "location",
          "type": "flags.15?ChannelLocation"
        },
        {
          "name": "slowmode_seconds",
          "type": "flags.17?int"
        },
        {
          "name": "slowmode_next_send_date",
          "type": "flags.18?int"
        },
        {
          "name": "stats_dc",
          "type": "flags.12?int"
        },
        {
          "name": "pts",
          "type": "int"
        }
      ],
      "type": "ChatFull"
    },
    "4046173921": {
      "id": 4046173921,
      "predicate": "pageBlockSubheader",
      "params": [
        {
          "name": "text",
          "type": "RichText"
        }
      ],
      "type": "PageBlock"
    },
    "4047615457": {
      "id": 4047615457,
      "predicate": "inputEncryptedChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputEncryptedChat"
    },
    "4050950690": {
      "id": 4050950690,
      "predicate": "messages.stickersNotModified",
      "params": [],
      "type": "messages.Stickers"
    },
    "4052539972": {
      "id": 4052539972,
      "predicate": "upload.fileCdnRedirect",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        },
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "encryption_key",
          "type": "bytes"
        },
        {
          "name": "encryption_iv",
          "type": "bytes"
        },
        {
          "name": "file_hashes",
          "type": "Vector<FileHash>"
        }
      ],
      "type": "upload.File"
    },
    "4065961995": {
      "id": 4065961995,
      "predicate": "pageBlockEmbedPost",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "webpage_id",
          "type": "long"
        },
        {
          "name": "author_photo_id",
          "type": "long"
        },
        {
          "name": "author",
          "type": "string"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "blocks",
          "type": "Vector<PageBlock>"
        },
        {
          "name": "caption",
          "type": "PageCaption"
        }
      ],
      "type": "PageBlock"
    },
    "4082227115": {
      "id": 4082227115,
      "predicate": "sendMessageUploadAudioAction",
      "params": [
        {
          "name": "progress",
          "type": "int"
        }
      ],
      "type": "SendMessageAction"
    },
    "4082920705": {
      "id": 4082920705,
      "predicate": "rpc_result",
      "params": [
        {
          "name": "req_msg_id",
          "type": "long"
        },
        {
          "name": "result",
          "type": "Object"
        }
      ],
      "type": "RpcResult"
    },
    "4085198614": {
      "id": 4085198614,
      "predicate": "messages.favedStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        },
        {
          "name": "packs",
          "type": "Vector<StickerPack>"
        },
        {
          "name": "stickers",
          "type": "Vector<Document>"
        }
      ],
      "type": "messages.FavedStickers"
    },
    "4085629430": {
      "id": 4085629430,
      "predicate": "langPackDifference",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        },
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "strings",
          "type": "Vector<LangPackString>"
        }
      ],
      "type": "LangPackDifference"
    },
    "4086478836": {
      "id": 4086478836,
      "predicate": "inputPhoneContact",
      "params": [
        {
          "name": "client_id",
          "type": "long"
        },
        {
          "name": "phone",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        }
      ],
      "type": "InputContact"
    },
    "4088278765": {
      "id": 4088278765,
      "predicate": "help.userInfoEmpty",
      "params": [],
      "type": "help.UserInfo"
    },
    "4088900809": {
      "id": 4088900809,
      "predicate": "inputGeoPoint",
      "params": [
        {
          "name": "lat",
          "type": "double"
        },
        {
          "name": "long",
          "type": "double"
        }
      ],
      "type": "InputGeoPoint"
    },
    "4092747638": {
      "id": 4092747638,
      "predicate": "messageActionContactSignUp",
      "params": [],
      "type": "MessageAction"
    },
    "4094724768": {
      "id": 4094724768,
      "predicate": "replyKeyboardForceReply",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "single_use",
          "type": "flags.1?true"
        },
        {
          "name": "selective",
          "type": "flags.2?true"
        }
      ],
      "type": "ReplyMarkup"
    },
    "4095653410": {
      "id": 4095653410,
      "predicate": "account.themesNotModified",
      "params": [],
      "type": "account.Themes"
    },
    "4108359363": {
      "id": 4108359363,
      "predicate": "inputMediaInvoice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.0?InputWebDocument"
        },
        {
          "name": "invoice",
          "type": "Invoice"
        },
        {
          "name": "payload",
          "type": "bytes"
        },
        {
          "name": "provider",
          "type": "string"
        },
        {
          "name": "provider_data",
          "type": "DataJSON"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    "4112735573": {
      "id": 4112735573,
      "predicate": "inputEncryptedFileLocation",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "access_hash",
          "type": "long"
        }
      ],
      "type": "InputFileLocation"
    },
    "4113560191": {
      "id": 4113560191,
      "predicate": "inputFile",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "md5_checksum",
          "type": "string"
        }
      ],
      "type": "InputFile"
    },
    "4117234314": {
      "id": 4117234314,
      "predicate": "bankCardOpenUrl",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "BankCardOpenUrl"
    },
    "4117684904": {
      "id": 4117684904,
      "predicate": "channels.channelParticipants",
      "params": [
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "participants",
          "type": "Vector<ChannelParticipant>"
        },
        {
          "name": "users",
          "type": "Vector<User>"
        }
      ],
      "type": "channels.ChannelParticipants"
    },
    "4119399921": {
      "id": 4119399921,
      "predicate": "inputThemeSlug",
      "params": [
        {
          "name": "slug",
          "type": "string"
        }
      ],
      "type": "InputTheme"
    },
    "4133544404": {
      "id": 4133544404,
      "predicate": "destroy_auth_key_ok",
      "params": [],
      "type": "DestroyAuthKeyRes"
    },
    "4148447075": {
      "id": 4148447075,
      "predicate": "jsonArray",
      "params": [
        {
          "name": "value",
          "type": "Vector<JSONValue>"
        }
      ],
      "type": "JSONValue"
    },
    "4156666175": {
      "id": 4156666175,
      "predicate": "inputUserSelf",
      "params": [],
      "type": "InputUser"
    },
    "4169726490": {
      "id": 4169726490,
      "predicate": "privacyValueDisallowContacts",
      "params": [],
      "type": "PrivacyRule"
    },
    "4170676210": {
      "id": 4170676210,
      "predicate": "channelAdminLogEventActionParticipantLeave",
      "params": [],
      "type": "ChannelAdminLogEventAction"
    },
    "4171036136": {
      "id": 4171036136,
      "predicate": "messageActionChatJoinedByLink",
      "params": [
        {
          "name": "inviter_id",
          "type": "int"
        }
      ],
      "type": "MessageAction"
    },
    "4171988475": {
      "id": 4171988475,
      "predicate": "inputMediaContact",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "vcard",
          "type": "string"
        }
      ],
      "type": "InputMedia"
    },
    "4176226379": {
      "id": 4176226379,
      "predicate": "peerSelfLocated",
      "params": [
        {
          "name": "expires",
          "type": "int"
        }
      ],
      "type": "PeerLocated"
    },
    "4178692500": {
      "id": 4178692500,
      "predicate": "contact",
      "params": [
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "mutual",
          "type": "Bool"
        }
      ],
      "type": "Contact"
    },
    "4190388548": {
      "id": 4190388548,
      "predicate": "inputMediaGeoPoint",
      "params": [
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        }
      ],
      "type": "InputMedia"
    },
    "4190682310": {
      "id": 4190682310,
      "predicate": "webDocumentNoProxy",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "attributes",
          "type": "Vector<DocumentAttribute>"
        }
      ],
      "type": "WebDocument"
    },
    "4191320666": {
      "id": 4191320666,
      "predicate": "updateInlineBotCallbackQuery",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "msg_id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "chat_instance",
          "type": "long"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        },
        {
          "name": "game_short_name",
          "type": "flags.1?string"
        }
      ],
      "type": "Update"
    },
    "4194588573": {
      "id": 4194588573,
      "predicate": "messageEntityMention",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "length",
          "type": "int"
        }
      ],
      "type": "MessageEntity"
    },
    "4195302562": {
      "id": 4195302562,
      "predicate": "updatePinnedDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.1?int"
        },
        {
          "name": "order",
          "type": "flags.0?Vector<DialogPeer>"
        }
      ],
      "type": "Update"
    },
    "4199484341": {
      "id": 4199484341,
      "predicate": "inputFileBig",
      "params": [
        {
          "name": "id",
          "type": "long"
        },
        {
          "name": "parts",
          "type": "int"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "type": "InputFile"
    },
    "4199992886": {
      "id": 4199992886,
      "predicate": "encryptedChat",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "access_hash",
          "type": "long"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "admin_id",
          "type": "int"
        },
        {
          "name": "participant_id",
          "type": "int"
        },
        {
          "name": "g_a_or_b",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        }
      ],
      "type": "EncryptedChat"
    },
    "4206550111": {
      "id": 4206550111,
      "predicate": "inputPrivacyKeyPhoneCall",
      "params": [],
      "type": "InputPrivacyKey"
    },
    "4209418070": {
      "id": 4209418070,
      "predicate": "messageActionCustomAction",
      "params": [
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "MessageAction"
    },
    "4210550985": {
      "id": 4210550985,
      "predicate": "phoneCallDiscardReasonBusy",
      "params": [],
      "type": "PhoneCallDiscardReason"
    },
    "4216511641": {
      "id": 4216511641,
      "predicate": "inputMediaDocumentExternal",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "ttl_seconds",
          "type": "flags.0?int"
        }
      ],
      "type": "InputMedia"
    },
    "4219683473": {
      "id": 4219683473,
      "predicate": "topPeerCategoryPeers",
      "params": [
        {
          "name": "category",
          "type": "TopPeerCategory"
        },
        {
          "name": "count",
          "type": "int"
        },
        {
          "name": "peers",
          "type": "Vector<TopPeer>"
        }
      ],
      "type": "TopPeerCategoryPeers"
    },
    "4220511292": {
      "id": 4220511292,
      "predicate": "payments.savedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "has_saved_credentials",
          "type": "flags.1?true"
        },
        {
          "name": "saved_info",
          "type": "flags.0?PaymentRequestedInfo"
        }
      ],
      "type": "payments.SavedInfo"
    },
    "4224893590": {
      "id": 4224893590,
      "predicate": "inputFolderPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "InputFolderPeer"
    },
    "4225242760": {
      "id": 4225242760,
      "predicate": "baseThemeDay",
      "params": [],
      "type": "BaseTheme"
    },
    "4226728176": {
      "id": 4226728176,
      "predicate": "topPeerCategoryForwardChats",
      "params": [],
      "type": "TopPeerCategory"
    },
    "4230874556": {
      "id": 4230874556,
      "predicate": "chatInviteExported",
      "params": [
        {
          "name": "link",
          "type": "string"
        }
      ],
      "type": "ExportedChatInvite"
    },
    "4231435598": {
      "id": 4231435598,
      "predicate": "secureValueTypeUtilityBill",
      "params": [],
      "type": "SecureValueType"
    },
    "4235815743": {
      "id": 4235815743,
      "predicate": "keyboardButtonRequestGeoLocation",
      "params": [
        {
          "name": "text",
          "type": "string"
        }
      ],
      "type": "KeyboardButton"
    },
    "4236742600": {
      "id": 4236742600,
      "predicate": "phoneCallProtocol",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "udp_p2p",
          "type": "flags.0?true"
        },
        {
          "name": "udp_reflector",
          "type": "flags.1?true"
        },
        {
          "name": "min_layer",
          "type": "int"
        },
        {
          "name": "max_layer",
          "type": "int"
        },
        {
          "name": "library_versions",
          "type": "Vector<string>"
        }
      ],
      "type": "PhoneCallProtocol"
    },
    "4237298731": {
      "id": 4237298731,
      "predicate": "chatParticipantsForbidden",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "self_participant",
          "type": "flags.0?ChatParticipant"
        }
      ],
      "type": "ChatParticipants"
    },
    "4239064759": {
      "id": 4239064759,
      "predicate": "inputDialogPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "InputDialogPeer"
    },
    "4250847477": {
      "id": 4250847477,
      "predicate": "sendMessageCancelAction",
      "params": [],
      "type": "SendMessageAction"
    },
    "4253970719": {
      "id": 4253970719,
      "predicate": "draftMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "date",
          "type": "int"
        }
      ],
      "type": "DraftMessage"
    },
    "4256272392": {
      "id": 4256272392,
      "predicate": "messageMediaGame",
      "params": [
        {
          "name": "game",
          "type": "Game"
        }
      ],
      "type": "MessageMedia"
    },
    "4283715173": {
      "id": 4283715173,
      "predicate": "folder",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "autofill_new_broadcasts",
          "type": "flags.0?true"
        },
        {
          "name": "autofill_public_groups",
          "type": "flags.1?true"
        },
        {
          "name": "autofill_new_correspondents",
          "type": "flags.2?true"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "photo",
          "type": "flags.3?ChatPhoto"
        }
      ],
      "type": "Folder"
    },
    "4288717974": {
      "id": 4288717974,
      "predicate": "inputStickerSetItem",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "document",
          "type": "InputDocument"
        },
        {
          "name": "emoji",
          "type": "string"
        },
        {
          "name": "mask_coords",
          "type": "flags.0?MaskCoords"
        }
      ],
      "type": "InputStickerSetItem"
    },
    "4290128789": {
      "id": 4290128789,
      "predicate": "inputStickerSetEmpty",
      "params": [],
      "type": "InputStickerSet"
    },
    "4291323271": {
      "id": 4291323271,
      "predicate": "inputMessagesFilterGif",
      "params": [],
      "type": "MessagesFilter"
    },
    "4294507972": {
      "id": 4294507972,
      "predicate": "inputBotInlineResultDocument",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "description",
          "type": "flags.2?string"
        },
        {
          "name": "document",
          "type": "InputDocument"
        },
        {
          "name": "send_message",
          "type": "InputBotInlineMessage"
        }
      ],
      "type": "InputBotInlineResult"
    },
    "4294843308": {
      "id": 4294843308,
      "predicate": "privacyValueAllowContacts",
      "params": [],
      "type": "PrivacyRule"
    }
  },
  "methodsByName": {
    "req_pq": {
      "id": 1615239032,
      "method": "req_pq",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        }
      ],
      "type": "ResPQ"
    },
    "req_pq_multi": {
      "id": 3195965169,
      "method": "req_pq_multi",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        }
      ],
      "type": "ResPQ"
    },
    "req_DH_params": {
      "id": 3608339646,
      "method": "req_DH_params",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "p",
          "type": "bytes"
        },
        {
          "name": "q",
          "type": "bytes"
        },
        {
          "name": "public_key_fingerprint",
          "type": "long"
        },
        {
          "name": "encrypted_data",
          "type": "bytes"
        }
      ],
      "type": "Server_DH_Params"
    },
    "set_client_DH_params": {
      "id": 4110704415,
      "method": "set_client_DH_params",
      "params": [
        {
          "name": "nonce",
          "type": "int128"
        },
        {
          "name": "server_nonce",
          "type": "int128"
        },
        {
          "name": "encrypted_data",
          "type": "bytes"
        }
      ],
      "type": "Set_client_DH_params_answer"
    },
    "rpc_drop_answer": {
      "id": 1491380032,
      "method": "rpc_drop_answer",
      "params": [
        {
          "name": "req_msg_id",
          "type": "long"
        }
      ],
      "type": "RpcDropAnswer"
    },
    "get_future_salts": {
      "id": 3105996036,
      "method": "get_future_salts",
      "params": [
        {
          "name": "num",
          "type": "int"
        }
      ],
      "type": "FutureSalts"
    },
    "ping": {
      "id": 2059302892,
      "method": "ping",
      "params": [
        {
          "name": "ping_id",
          "type": "long"
        }
      ],
      "type": "Pong"
    },
    "ping_delay_disconnect": {
      "id": 4081220492,
      "method": "ping_delay_disconnect",
      "params": [
        {
          "name": "ping_id",
          "type": "long"
        },
        {
          "name": "disconnect_delay",
          "type": "int"
        }
      ],
      "type": "Pong"
    },
    "http_wait": {
      "id": 2459514271,
      "method": "http_wait",
      "params": [
        {
          "name": "max_delay",
          "type": "int"
        },
        {
          "name": "wait_after",
          "type": "int"
        },
        {
          "name": "max_wait",
          "type": "int"
        }
      ],
      "type": "HttpWait"
    },
    "destroy_auth_key": {
      "id": 3510849888,
      "method": "destroy_auth_key",
      "params": [],
      "type": "DestroyAuthKeyRes"
    },
    "destroy_session": {
      "id": 3880853798,
      "method": "destroy_session",
      "params": [
        {
          "name": "session_id",
          "type": "long"
        }
      ],
      "type": "DestroySessionRes"
    },
    "invokeAfterMsg": {
      "id": 3416209197,
      "method": "invokeAfterMsg",
      "params": [
        {
          "name": "msg_id",
          "type": "long"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    "invokeAfterMsgs": {
      "id": 1036301552,
      "method": "invokeAfterMsgs",
      "params": [
        {
          "name": "msg_ids",
          "type": "Vector<long>"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    "initConnection": {
      "id": 3251461801,
      "method": "initConnection",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "device_model",
          "type": "string"
        },
        {
          "name": "system_version",
          "type": "string"
        },
        {
          "name": "app_version",
          "type": "string"
        },
        {
          "name": "system_lang_code",
          "type": "string"
        },
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "proxy",
          "type": "flags.0?InputClientProxy"
        },
        {
          "name": "params",
          "type": "flags.1?JSONValue"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    "invokeWithLayer": {
      "id": 3667594509,
      "method": "invokeWithLayer",
      "params": [
        {
          "name": "layer",
          "type": "int"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    "invokeWithoutUpdates": {
      "id": 3214170551,
      "method": "invokeWithoutUpdates",
      "params": [
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    "invokeWithMessagesRange": {
      "id": 911373810,
      "method": "invokeWithMessagesRange",
      "params": [
        {
          "name": "range",
          "type": "MessageRange"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    "invokeWithTakeout": {
      "id": 2896821550,
      "method": "invokeWithTakeout",
      "params": [
        {
          "name": "takeout_id",
          "type": "long"
        },
        {
          "name": "query",
          "type": "!X"
        }
      ],
      "type": "X"
    },
    "auth.sendCode": {
      "id": 2792825935,
      "method": "auth.sendCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "api_hash",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    "auth.signUp": {
      "id": 2163139623,
      "method": "auth.signUp",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    "auth.signIn": {
      "id": 3168081281,
      "method": "auth.signIn",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    "auth.logOut": {
      "id": 1461180992,
      "method": "auth.logOut",
      "params": [],
      "type": "Bool"
    },
    "auth.resetAuthorizations": {
      "id": 2678787354,
      "method": "auth.resetAuthorizations",
      "params": [],
      "type": "Bool"
    },
    "auth.exportAuthorization": {
      "id": 3854565325,
      "method": "auth.exportAuthorization",
      "params": [
        {
          "name": "dc_id",
          "type": "int"
        }
      ],
      "type": "auth.ExportedAuthorization"
    },
    "auth.importAuthorization": {
      "id": 3824129555,
      "method": "auth.importAuthorization",
      "params": [
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "auth.Authorization"
    },
    "auth.bindTempAuthKey": {
      "id": 3453233669,
      "method": "auth.bindTempAuthKey",
      "params": [
        {
          "name": "perm_auth_key_id",
          "type": "long"
        },
        {
          "name": "nonce",
          "type": "long"
        },
        {
          "name": "expires_at",
          "type": "int"
        },
        {
          "name": "encrypted_message",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    "auth.importBotAuthorization": {
      "id": 1738800940,
      "method": "auth.importBotAuthorization",
      "params": [
        {
          "name": "flags",
          "type": "int"
        },
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "api_hash",
          "type": "string"
        },
        {
          "name": "bot_auth_token",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    "auth.checkPassword": {
      "id": 3515567382,
      "method": "auth.checkPassword",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "auth.Authorization"
    },
    "auth.requestPasswordRecovery": {
      "id": 3633822822,
      "method": "auth.requestPasswordRecovery",
      "params": [],
      "type": "auth.PasswordRecovery"
    },
    "auth.recoverPassword": {
      "id": 1319464594,
      "method": "auth.recoverPassword",
      "params": [
        {
          "name": "code",
          "type": "string"
        }
      ],
      "type": "auth.Authorization"
    },
    "auth.resendCode": {
      "id": 1056025023,
      "method": "auth.resendCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        }
      ],
      "type": "auth.SentCode"
    },
    "auth.cancelCode": {
      "id": 520357240,
      "method": "auth.cancelCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    "auth.dropTempAuthKeys": {
      "id": 2387124616,
      "method": "auth.dropTempAuthKeys",
      "params": [
        {
          "name": "except_auth_keys",
          "type": "Vector<long>"
        }
      ],
      "type": "Bool"
    },
    "auth.exportLoginToken": {
      "id": 2981369111,
      "method": "auth.exportLoginToken",
      "params": [
        {
          "name": "api_id",
          "type": "int"
        },
        {
          "name": "api_hash",
          "type": "string"
        },
        {
          "name": "except_ids",
          "type": "Vector<int>"
        }
      ],
      "type": "auth.LoginToken"
    },
    "auth.importLoginToken": {
      "id": 2511101156,
      "method": "auth.importLoginToken",
      "params": [
        {
          "name": "token",
          "type": "bytes"
        }
      ],
      "type": "auth.LoginToken"
    },
    "auth.acceptLoginToken": {
      "id": 3902057805,
      "method": "auth.acceptLoginToken",
      "params": [
        {
          "name": "token",
          "type": "bytes"
        }
      ],
      "type": "Authorization"
    },
    "account.registerDevice": {
      "id": 1754754159,
      "method": "account.registerDevice",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_muted",
          "type": "flags.0?true"
        },
        {
          "name": "token_type",
          "type": "int"
        },
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "app_sandbox",
          "type": "Bool"
        },
        {
          "name": "secret",
          "type": "bytes"
        },
        {
          "name": "other_uids",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    "account.unregisterDevice": {
      "id": 813089983,
      "method": "account.unregisterDevice",
      "params": [
        {
          "name": "token_type",
          "type": "int"
        },
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "other_uids",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    "account.updateNotifySettings": {
      "id": 2227067795,
      "method": "account.updateNotifySettings",
      "params": [
        {
          "name": "peer",
          "type": "InputNotifyPeer"
        },
        {
          "name": "settings",
          "type": "InputPeerNotifySettings"
        }
      ],
      "type": "Bool"
    },
    "account.getNotifySettings": {
      "id": 313765169,
      "method": "account.getNotifySettings",
      "params": [
        {
          "name": "peer",
          "type": "InputNotifyPeer"
        }
      ],
      "type": "PeerNotifySettings"
    },
    "account.resetNotifySettings": {
      "id": 3682473799,
      "method": "account.resetNotifySettings",
      "params": [],
      "type": "Bool"
    },
    "account.updateProfile": {
      "id": 2018596725,
      "method": "account.updateProfile",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "first_name",
          "type": "flags.0?string"
        },
        {
          "name": "last_name",
          "type": "flags.1?string"
        },
        {
          "name": "about",
          "type": "flags.2?string"
        }
      ],
      "type": "User"
    },
    "account.updateStatus": {
      "id": 1713919532,
      "method": "account.updateStatus",
      "params": [
        {
          "name": "offline",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    "account.getWallPapers": {
      "id": 2864387939,
      "method": "account.getWallPapers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "account.WallPapers"
    },
    "account.reportPeer": {
      "id": 2920848735,
      "method": "account.reportPeer",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reason",
          "type": "ReportReason"
        }
      ],
      "type": "Bool"
    },
    "account.checkUsername": {
      "id": 655677548,
      "method": "account.checkUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    "account.updateUsername": {
      "id": 1040964988,
      "method": "account.updateUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "User"
    },
    "account.getPrivacy": {
      "id": 3671837008,
      "method": "account.getPrivacy",
      "params": [
        {
          "name": "key",
          "type": "InputPrivacyKey"
        }
      ],
      "type": "account.PrivacyRules"
    },
    "account.setPrivacy": {
      "id": 3388480744,
      "method": "account.setPrivacy",
      "params": [
        {
          "name": "key",
          "type": "InputPrivacyKey"
        },
        {
          "name": "rules",
          "type": "Vector<InputPrivacyRule>"
        }
      ],
      "type": "account.PrivacyRules"
    },
    "account.deleteAccount": {
      "id": 1099779595,
      "method": "account.deleteAccount",
      "params": [
        {
          "name": "reason",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    "account.getAccountTTL": {
      "id": 150761757,
      "method": "account.getAccountTTL",
      "params": [],
      "type": "AccountDaysTTL"
    },
    "account.setAccountTTL": {
      "id": 608323678,
      "method": "account.setAccountTTL",
      "params": [
        {
          "name": "ttl",
          "type": "AccountDaysTTL"
        }
      ],
      "type": "Bool"
    },
    "account.sendChangePhoneCode": {
      "id": 2186758885,
      "method": "account.sendChangePhoneCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    "account.changePhone": {
      "id": 1891839707,
      "method": "account.changePhone",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "User"
    },
    "account.updateDeviceLocked": {
      "id": 954152242,
      "method": "account.updateDeviceLocked",
      "params": [
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    "account.getAuthorizations": {
      "id": 3810574680,
      "method": "account.getAuthorizations",
      "params": [],
      "type": "account.Authorizations"
    },
    "account.resetAuthorization": {
      "id": 3749180348,
      "method": "account.resetAuthorization",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "Bool"
    },
    "account.getPassword": {
      "id": 1418342645,
      "method": "account.getPassword",
      "params": [],
      "type": "account.Password"
    },
    "account.getPasswordSettings": {
      "id": 2631199481,
      "method": "account.getPasswordSettings",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "account.PasswordSettings"
    },
    "account.updatePasswordSettings": {
      "id": 2778402863,
      "method": "account.updatePasswordSettings",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        },
        {
          "name": "new_settings",
          "type": "account.PasswordInputSettings"
        }
      ],
      "type": "Bool"
    },
    "account.sendConfirmPhoneCode": {
      "id": 457157256,
      "method": "account.sendConfirmPhoneCode",
      "params": [
        {
          "name": "hash",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    "account.confirmPhone": {
      "id": 1596029123,
      "method": "account.confirmPhone",
      "params": [
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    "account.getTmpPassword": {
      "id": 1151208273,
      "method": "account.getTmpPassword",
      "params": [
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        },
        {
          "name": "period",
          "type": "int"
        }
      ],
      "type": "account.TmpPassword"
    },
    "account.getWebAuthorizations": {
      "id": 405695855,
      "method": "account.getWebAuthorizations",
      "params": [],
      "type": "account.WebAuthorizations"
    },
    "account.resetWebAuthorization": {
      "id": 755087855,
      "method": "account.resetWebAuthorization",
      "params": [
        {
          "name": "hash",
          "type": "long"
        }
      ],
      "type": "Bool"
    },
    "account.resetWebAuthorizations": {
      "id": 1747789204,
      "method": "account.resetWebAuthorizations",
      "params": [],
      "type": "Bool"
    },
    "account.getAllSecureValues": {
      "id": 2995305597,
      "method": "account.getAllSecureValues",
      "params": [],
      "type": "Vector<SecureValue>"
    },
    "account.getSecureValue": {
      "id": 1936088002,
      "method": "account.getSecureValue",
      "params": [
        {
          "name": "types",
          "type": "Vector<SecureValueType>"
        }
      ],
      "type": "Vector<SecureValue>"
    },
    "account.saveSecureValue": {
      "id": 2308956957,
      "method": "account.saveSecureValue",
      "params": [
        {
          "name": "value",
          "type": "InputSecureValue"
        },
        {
          "name": "secure_secret_id",
          "type": "long"
        }
      ],
      "type": "SecureValue"
    },
    "account.deleteSecureValue": {
      "id": 3095444555,
      "method": "account.deleteSecureValue",
      "params": [
        {
          "name": "types",
          "type": "Vector<SecureValueType>"
        }
      ],
      "type": "Bool"
    },
    "account.getAuthorizationForm": {
      "id": 3094063329,
      "method": "account.getAuthorizationForm",
      "params": [
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "scope",
          "type": "string"
        },
        {
          "name": "public_key",
          "type": "string"
        }
      ],
      "type": "account.AuthorizationForm"
    },
    "account.acceptAuthorization": {
      "id": 3875699860,
      "method": "account.acceptAuthorization",
      "params": [
        {
          "name": "bot_id",
          "type": "int"
        },
        {
          "name": "scope",
          "type": "string"
        },
        {
          "name": "public_key",
          "type": "string"
        },
        {
          "name": "value_hashes",
          "type": "Vector<SecureValueHash>"
        },
        {
          "name": "credentials",
          "type": "SecureCredentialsEncrypted"
        }
      ],
      "type": "Bool"
    },
    "account.sendVerifyPhoneCode": {
      "id": 2778945273,
      "method": "account.sendVerifyPhoneCode",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "CodeSettings"
        }
      ],
      "type": "auth.SentCode"
    },
    "account.verifyPhone": {
      "id": 1305716726,
      "method": "account.verifyPhone",
      "params": [
        {
          "name": "phone_number",
          "type": "string"
        },
        {
          "name": "phone_code_hash",
          "type": "string"
        },
        {
          "name": "phone_code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    "account.sendVerifyEmailCode": {
      "id": 1880182943,
      "method": "account.sendVerifyEmailCode",
      "params": [
        {
          "name": "email",
          "type": "string"
        }
      ],
      "type": "account.SentEmailCode"
    },
    "account.verifyEmail": {
      "id": 3971627483,
      "method": "account.verifyEmail",
      "params": [
        {
          "name": "email",
          "type": "string"
        },
        {
          "name": "code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    "account.initTakeoutSession": {
      "id": 4032514052,
      "method": "account.initTakeoutSession",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "contacts",
          "type": "flags.0?true"
        },
        {
          "name": "message_users",
          "type": "flags.1?true"
        },
        {
          "name": "message_chats",
          "type": "flags.2?true"
        },
        {
          "name": "message_megagroups",
          "type": "flags.3?true"
        },
        {
          "name": "message_channels",
          "type": "flags.4?true"
        },
        {
          "name": "files",
          "type": "flags.5?true"
        },
        {
          "name": "file_max_size",
          "type": "flags.5?int"
        }
      ],
      "type": "account.Takeout"
    },
    "account.finishTakeoutSession": {
      "id": 489050862,
      "method": "account.finishTakeoutSession",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "success",
          "type": "flags.0?true"
        }
      ],
      "type": "Bool"
    },
    "account.confirmPasswordEmail": {
      "id": 2413762848,
      "method": "account.confirmPasswordEmail",
      "params": [
        {
          "name": "code",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    "account.resendPasswordEmail": {
      "id": 2055154197,
      "method": "account.resendPasswordEmail",
      "params": [],
      "type": "Bool"
    },
    "account.cancelPasswordEmail": {
      "id": 3251361206,
      "method": "account.cancelPasswordEmail",
      "params": [],
      "type": "Bool"
    },
    "account.getContactSignUpNotification": {
      "id": 2668087080,
      "method": "account.getContactSignUpNotification",
      "params": [],
      "type": "Bool"
    },
    "account.setContactSignUpNotification": {
      "id": 3488890721,
      "method": "account.setContactSignUpNotification",
      "params": [
        {
          "name": "silent",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    "account.getNotifyExceptions": {
      "id": 1398240377,
      "method": "account.getNotifyExceptions",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "compare_sound",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "flags.0?InputNotifyPeer"
        }
      ],
      "type": "Updates"
    },
    "account.getWallPaper": {
      "id": 4237155306,
      "method": "account.getWallPaper",
      "params": [
        {
          "name": "wallpaper",
          "type": "InputWallPaper"
        }
      ],
      "type": "WallPaper"
    },
    "account.uploadWallPaper": {
      "id": 3716494945,
      "method": "account.uploadWallPaper",
      "params": [
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "mime_type",
          "type": "string"
        },
        {
          "name": "settings",
          "type": "WallPaperSettings"
        }
      ],
      "type": "WallPaper"
    },
    "account.saveWallPaper": {
      "id": 1817860919,
      "method": "account.saveWallPaper",
      "params": [
        {
          "name": "wallpaper",
          "type": "InputWallPaper"
        },
        {
          "name": "unsave",
          "type": "Bool"
        },
        {
          "name": "settings",
          "type": "WallPaperSettings"
        }
      ],
      "type": "Bool"
    },
    "account.installWallPaper": {
      "id": 4276967273,
      "method": "account.installWallPaper",
      "params": [
        {
          "name": "wallpaper",
          "type": "InputWallPaper"
        },
        {
          "name": "settings",
          "type": "WallPaperSettings"
        }
      ],
      "type": "Bool"
    },
    "account.resetWallPapers": {
      "id": 3141244932,
      "method": "account.resetWallPapers",
      "params": [],
      "type": "Bool"
    },
    "account.getAutoDownloadSettings": {
      "id": 1457130303,
      "method": "account.getAutoDownloadSettings",
      "params": [],
      "type": "account.AutoDownloadSettings"
    },
    "account.saveAutoDownloadSettings": {
      "id": 1995661875,
      "method": "account.saveAutoDownloadSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "low",
          "type": "flags.0?true"
        },
        {
          "name": "high",
          "type": "flags.1?true"
        },
        {
          "name": "settings",
          "type": "AutoDownloadSettings"
        }
      ],
      "type": "Bool"
    },
    "account.uploadTheme": {
      "id": 473805619,
      "method": "account.uploadTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "file",
          "type": "InputFile"
        },
        {
          "name": "thumb",
          "type": "flags.0?InputFile"
        },
        {
          "name": "file_name",
          "type": "string"
        },
        {
          "name": "mime_type",
          "type": "string"
        }
      ],
      "type": "Document"
    },
    "account.createTheme": {
      "id": 2217919007,
      "method": "account.createTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "document",
          "type": "flags.2?InputDocument"
        },
        {
          "name": "settings",
          "type": "flags.3?InputThemeSettings"
        }
      ],
      "type": "Theme"
    },
    "account.updateTheme": {
      "id": 1555261397,
      "method": "account.updateTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "format",
          "type": "string"
        },
        {
          "name": "theme",
          "type": "InputTheme"
        },
        {
          "name": "slug",
          "type": "flags.0?string"
        },
        {
          "name": "title",
          "type": "flags.1?string"
        },
        {
          "name": "document",
          "type": "flags.2?InputDocument"
        },
        {
          "name": "settings",
          "type": "flags.3?InputThemeSettings"
        }
      ],
      "type": "Theme"
    },
    "account.saveTheme": {
      "id": 4065792108,
      "method": "account.saveTheme",
      "params": [
        {
          "name": "theme",
          "type": "InputTheme"
        },
        {
          "name": "unsave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    "account.installTheme": {
      "id": 2061776695,
      "method": "account.installTheme",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "format",
          "type": "flags.1?string"
        },
        {
          "name": "theme",
          "type": "flags.1?InputTheme"
        }
      ],
      "type": "Bool"
    },
    "account.getTheme": {
      "id": 2375906347,
      "method": "account.getTheme",
      "params": [
        {
          "name": "format",
          "type": "string"
        },
        {
          "name": "theme",
          "type": "InputTheme"
        },
        {
          "name": "document_id",
          "type": "long"
        }
      ],
      "type": "Theme"
    },
    "account.getThemes": {
      "id": 676939512,
      "method": "account.getThemes",
      "params": [
        {
          "name": "format",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "account.Themes"
    },
    "account.setContentSettings": {
      "id": 3044323691,
      "method": "account.setContentSettings",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "sensitive_enabled",
          "type": "flags.0?true"
        }
      ],
      "type": "Bool"
    },
    "account.getContentSettings": {
      "id": 2342210990,
      "method": "account.getContentSettings",
      "params": [],
      "type": "account.ContentSettings"
    },
    "account.getMultiWallPapers": {
      "id": 1705865692,
      "method": "account.getMultiWallPapers",
      "params": [
        {
          "name": "wallpapers",
          "type": "Vector<InputWallPaper>"
        }
      ],
      "type": "Vector<WallPaper>"
    },
    "users.getUsers": {
      "id": 227648840,
      "method": "users.getUsers",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "Vector<User>"
    },
    "users.getFullUser": {
      "id": 3392185777,
      "method": "users.getFullUser",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        }
      ],
      "type": "UserFull"
    },
    "users.setSecureValueErrors": {
      "id": 2429064373,
      "method": "users.setSecureValueErrors",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        },
        {
          "name": "errors",
          "type": "Vector<SecureValueError>"
        }
      ],
      "type": "Bool"
    },
    "contacts.getContactIDs": {
      "id": 749357634,
      "method": "contacts.getContactIDs",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "Vector<int>"
    },
    "contacts.getStatuses": {
      "id": 3299038190,
      "method": "contacts.getStatuses",
      "params": [],
      "type": "Vector<ContactStatus>"
    },
    "contacts.getContacts": {
      "id": 3223553183,
      "method": "contacts.getContacts",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "contacts.Contacts"
    },
    "contacts.importContacts": {
      "id": 746589157,
      "method": "contacts.importContacts",
      "params": [
        {
          "name": "contacts",
          "type": "Vector<InputContact>"
        }
      ],
      "type": "contacts.ImportedContacts"
    },
    "contacts.deleteContacts": {
      "id": 157945344,
      "method": "contacts.deleteContacts",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "Updates"
    },
    "contacts.deleteByPhones": {
      "id": 269745566,
      "method": "contacts.deleteByPhones",
      "params": [
        {
          "name": "phones",
          "type": "Vector<string>"
        }
      ],
      "type": "Bool"
    },
    "contacts.block": {
      "id": 858475004,
      "method": "contacts.block",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        }
      ],
      "type": "Bool"
    },
    "contacts.unblock": {
      "id": 3846242493,
      "method": "contacts.unblock",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        }
      ],
      "type": "Bool"
    },
    "contacts.getBlocked": {
      "id": 4118557967,
      "method": "contacts.getBlocked",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "contacts.Blocked"
    },
    "contacts.search": {
      "id": 301470424,
      "method": "contacts.search",
      "params": [
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "contacts.Found"
    },
    "contacts.resolveUsername": {
      "id": 4181511075,
      "method": "contacts.resolveUsername",
      "params": [
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "contacts.ResolvedPeer"
    },
    "contacts.getTopPeers": {
      "id": 3566742965,
      "method": "contacts.getTopPeers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "correspondents",
          "type": "flags.0?true"
        },
        {
          "name": "bots_pm",
          "type": "flags.1?true"
        },
        {
          "name": "bots_inline",
          "type": "flags.2?true"
        },
        {
          "name": "phone_calls",
          "type": "flags.3?true"
        },
        {
          "name": "forward_users",
          "type": "flags.4?true"
        },
        {
          "name": "forward_chats",
          "type": "flags.5?true"
        },
        {
          "name": "groups",
          "type": "flags.10?true"
        },
        {
          "name": "channels",
          "type": "flags.15?true"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "contacts.TopPeers"
    },
    "contacts.resetTopPeerRating": {
      "id": 451113900,
      "method": "contacts.resetTopPeerRating",
      "params": [
        {
          "name": "category",
          "type": "TopPeerCategory"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    "contacts.resetSaved": {
      "id": 2274703345,
      "method": "contacts.resetSaved",
      "params": [],
      "type": "Bool"
    },
    "contacts.getSaved": {
      "id": 2196890527,
      "method": "contacts.getSaved",
      "params": [],
      "type": "Vector<SavedContact>"
    },
    "contacts.toggleTopPeers": {
      "id": 2232729050,
      "method": "contacts.toggleTopPeers",
      "params": [
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    "contacts.addContact": {
      "id": 3908330448,
      "method": "contacts.addContact",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "add_phone_privacy_exception",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "InputUser"
        },
        {
          "name": "first_name",
          "type": "string"
        },
        {
          "name": "last_name",
          "type": "string"
        },
        {
          "name": "phone",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    "contacts.acceptContact": {
      "id": 4164002319,
      "method": "contacts.acceptContact",
      "params": [
        {
          "name": "id",
          "type": "InputUser"
        }
      ],
      "type": "Updates"
    },
    "contacts.getLocated": {
      "id": 3544759364,
      "method": "contacts.getLocated",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "background",
          "type": "flags.1?true"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "self_expires",
          "type": "flags.0?int"
        }
      ],
      "type": "Updates"
    },
    "messages.getMessages": {
      "id": 1673946374,
      "method": "messages.getMessages",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputMessage>"
        }
      ],
      "type": "messages.Messages"
    },
    "messages.getDialogs": {
      "id": 2699967347,
      "method": "messages.getDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_pinned",
          "type": "flags.0?true"
        },
        {
          "name": "folder_id",
          "type": "flags.1?int"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_peer",
          "type": "InputPeer"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Dialogs"
    },
    "messages.getHistory": {
      "id": 3703276128,
      "method": "messages.getHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "offset_date",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    "messages.search": {
      "id": 2249518952,
      "method": "messages.search",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "from_id",
          "type": "flags.0?InputUser"
        },
        {
          "name": "filter",
          "type": "MessagesFilter"
        },
        {
          "name": "min_date",
          "type": "int"
        },
        {
          "name": "max_date",
          "type": "int"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    "messages.readHistory": {
      "id": 238054714,
      "method": "messages.readHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    "messages.deleteHistory": {
      "id": 469850889,
      "method": "messages.deleteHistory",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "just_clear",
          "type": "flags.0?true"
        },
        {
          "name": "revoke",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    "messages.deleteMessages": {
      "id": 3851326930,
      "method": "messages.deleteMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "revoke",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    "messages.receivedMessages": {
      "id": 94983360,
      "method": "messages.receivedMessages",
      "params": [
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Vector<ReceivedNotifyMessage>"
    },
    "messages.setTyping": {
      "id": 2743230032,
      "method": "messages.setTyping",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "action",
          "type": "SendMessageAction"
        }
      ],
      "type": "Bool"
    },
    "messages.sendMessage": {
      "id": 1376532592,
      "method": "messages.sendMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        }
      ],
      "type": "Updates"
    },
    "messages.sendMedia": {
      "id": 881978281,
      "method": "messages.sendMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "media",
          "type": "InputMedia"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        }
      ],
      "type": "Updates"
    },
    "messages.forwardMessages": {
      "id": 3657360910,
      "method": "messages.forwardMessages",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "with_my_score",
          "type": "flags.8?true"
        },
        {
          "name": "grouped",
          "type": "flags.9?true"
        },
        {
          "name": "from_peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        },
        {
          "name": "random_id",
          "type": "Vector<long>"
        },
        {
          "name": "to_peer",
          "type": "InputPeer"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        }
      ],
      "type": "Updates"
    },
    "messages.reportSpam": {
      "id": 3474297563,
      "method": "messages.reportSpam",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    "messages.getPeerSettings": {
      "id": 913498268,
      "method": "messages.getPeerSettings",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "PeerSettings"
    },
    "messages.report": {
      "id": 3179460184,
      "method": "messages.report",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        },
        {
          "name": "reason",
          "type": "ReportReason"
        }
      ],
      "type": "Bool"
    },
    "messages.getChats": {
      "id": 1013621127,
      "method": "messages.getChats",
      "params": [
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.Chats"
    },
    "messages.getFullChat": {
      "id": 998448230,
      "method": "messages.getFullChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "messages.ChatFull"
    },
    "messages.editChatTitle": {
      "id": 3695519829,
      "method": "messages.editChatTitle",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    "messages.editChatPhoto": {
      "id": 3394009560,
      "method": "messages.editChatPhoto",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "photo",
          "type": "InputChatPhoto"
        }
      ],
      "type": "Updates"
    },
    "messages.addChatUser": {
      "id": 4188056073,
      "method": "messages.addChatUser",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "fwd_limit",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    "messages.deleteChatUser": {
      "id": 3764461334,
      "method": "messages.deleteChatUser",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "Updates"
    },
    "messages.createChat": {
      "id": 164303470,
      "method": "messages.createChat",
      "params": [
        {
          "name": "users",
          "type": "Vector<InputUser>"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    "messages.getDhConfig": {
      "id": 651135312,
      "method": "messages.getDhConfig",
      "params": [
        {
          "name": "version",
          "type": "int"
        },
        {
          "name": "random_length",
          "type": "int"
        }
      ],
      "type": "messages.DhConfig"
    },
    "messages.requestEncryption": {
      "id": 4132286275,
      "method": "messages.requestEncryption",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "random_id",
          "type": "int"
        },
        {
          "name": "g_a",
          "type": "bytes"
        }
      ],
      "type": "EncryptedChat"
    },
    "messages.acceptEncryption": {
      "id": 1035731989,
      "method": "messages.acceptEncryption",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "g_b",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        }
      ],
      "type": "EncryptedChat"
    },
    "messages.discardEncryption": {
      "id": 3990430661,
      "method": "messages.discardEncryption",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    "messages.setEncryptedTyping": {
      "id": 2031374829,
      "method": "messages.setEncryptedTyping",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "typing",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    "messages.readEncryptedHistory": {
      "id": 2135648522,
      "method": "messages.readEncryptedHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "max_date",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    "messages.sendEncrypted": {
      "id": 2843174771,
      "method": "messages.sendEncrypted",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    "messages.sendEncryptedFile": {
      "id": 2593135462,
      "method": "messages.sendEncryptedFile",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "file",
          "type": "InputEncryptedFile"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    "messages.sendEncryptedService": {
      "id": 852769188,
      "method": "messages.sendEncryptedService",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "type": "messages.SentEncryptedMessage"
    },
    "messages.receivedQueue": {
      "id": 1436924774,
      "method": "messages.receivedQueue",
      "params": [
        {
          "name": "max_qts",
          "type": "int"
        }
      ],
      "type": "Vector<long>"
    },
    "messages.reportEncryptedSpam": {
      "id": 1259113487,
      "method": "messages.reportEncryptedSpam",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        }
      ],
      "type": "Bool"
    },
    "messages.readMessageContents": {
      "id": 916930423,
      "method": "messages.readMessageContents",
      "params": [
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    "messages.getStickers": {
      "id": 71126828,
      "method": "messages.getStickers",
      "params": [
        {
          "name": "emoticon",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Stickers"
    },
    "messages.getAllStickers": {
      "id": 479598769,
      "method": "messages.getAllStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.AllStickers"
    },
    "messages.getWebPagePreview": {
      "id": 2338894028,
      "method": "messages.getWebPagePreview",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        }
      ],
      "type": "MessageMedia"
    },
    "messages.exportChatInvite": {
      "id": 234312524,
      "method": "messages.exportChatInvite",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "ExportedChatInvite"
    },
    "messages.checkChatInvite": {
      "id": 1051570619,
      "method": "messages.checkChatInvite",
      "params": [
        {
          "name": "hash",
          "type": "string"
        }
      ],
      "type": "ChatInvite"
    },
    "messages.importChatInvite": {
      "id": 1817183516,
      "method": "messages.importChatInvite",
      "params": [
        {
          "name": "hash",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    "messages.getStickerSet": {
      "id": 639215886,
      "method": "messages.getStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "messages.StickerSet"
    },
    "messages.installStickerSet": {
      "id": 3348096096,
      "method": "messages.installStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "archived",
          "type": "Bool"
        }
      ],
      "type": "messages.StickerSetInstallResult"
    },
    "messages.uninstallStickerSet": {
      "id": 4184757726,
      "method": "messages.uninstallStickerSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "Bool"
    },
    "messages.startBot": {
      "id": 3873403768,
      "method": "messages.startBot",
      "params": [
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "start_param",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    "messages.getMessagesViews": {
      "id": 3301483869,
      "method": "messages.getMessagesViews",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        },
        {
          "name": "increment",
          "type": "Bool"
        }
      ],
      "type": "Vector<int>"
    },
    "messages.editChatAdmin": {
      "id": 2850463534,
      "method": "messages.editChatAdmin",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "is_admin",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    "messages.migrateChat": {
      "id": 363051235,
      "method": "messages.migrateChat",
      "params": [
        {
          "name": "chat_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    "messages.searchGlobal": {
      "id": 3211928996,
      "method": "messages.searchGlobal",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "folder_id",
          "type": "flags.0?int"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "offset_rate",
          "type": "int"
        },
        {
          "name": "offset_peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    "messages.reorderStickerSets": {
      "id": 2016638777,
      "method": "messages.reorderStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "order",
          "type": "Vector<long>"
        }
      ],
      "type": "Bool"
    },
    "messages.getDocumentByHash": {
      "id": 864953444,
      "method": "messages.getDocumentByHash",
      "params": [
        {
          "name": "sha256",
          "type": "bytes"
        },
        {
          "name": "size",
          "type": "int"
        },
        {
          "name": "mime_type",
          "type": "string"
        }
      ],
      "type": "Document"
    },
    "messages.searchGifs": {
      "id": 3214571371,
      "method": "messages.searchGifs",
      "params": [
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "messages.FoundGifs"
    },
    "messages.getSavedGifs": {
      "id": 2210348370,
      "method": "messages.getSavedGifs",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.SavedGifs"
    },
    "messages.saveGif": {
      "id": 846868683,
      "method": "messages.saveGif",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unsave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    "messages.getInlineBotResults": {
      "id": 1364105629,
      "method": "messages.getInlineBotResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "bot",
          "type": "InputUser"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "geo_point",
          "type": "flags.0?InputGeoPoint"
        },
        {
          "name": "query",
          "type": "string"
        },
        {
          "name": "offset",
          "type": "string"
        }
      ],
      "type": "messages.BotResults"
    },
    "messages.setInlineBotResults": {
      "id": 3948847622,
      "method": "messages.setInlineBotResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "gallery",
          "type": "flags.0?true"
        },
        {
          "name": "private",
          "type": "flags.1?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "results",
          "type": "Vector<InputBotInlineResult>"
        },
        {
          "name": "cache_time",
          "type": "int"
        },
        {
          "name": "next_offset",
          "type": "flags.2?string"
        },
        {
          "name": "switch_pm",
          "type": "flags.3?InlineBotSwitchPM"
        }
      ],
      "type": "Bool"
    },
    "messages.sendInlineBotResult": {
      "id": 570955184,
      "method": "messages.sendInlineBotResult",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "hide_via",
          "type": "flags.11?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "random_id",
          "type": "long"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        }
      ],
      "type": "Updates"
    },
    "messages.getMessageEditData": {
      "id": 4255550774,
      "method": "messages.getMessageEditData",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "messages.MessageEditData"
    },
    "messages.editMessage": {
      "id": 1224152952,
      "method": "messages.editMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "message",
          "type": "flags.11?string"
        },
        {
          "name": "media",
          "type": "flags.14?InputMedia"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        },
        {
          "name": "schedule_date",
          "type": "flags.15?int"
        }
      ],
      "type": "Updates"
    },
    "messages.editInlineBotMessage": {
      "id": 2203418042,
      "method": "messages.editInlineBotMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "message",
          "type": "flags.11?string"
        },
        {
          "name": "media",
          "type": "flags.14?InputMedia"
        },
        {
          "name": "reply_markup",
          "type": "flags.2?ReplyMarkup"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        }
      ],
      "type": "Bool"
    },
    "messages.getBotCallbackAnswer": {
      "id": 2164957164,
      "method": "messages.getBotCallbackAnswer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "game",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "data",
          "type": "flags.0?bytes"
        }
      ],
      "type": "messages.BotCallbackAnswer"
    },
    "messages.setBotCallbackAnswer": {
      "id": 3582923530,
      "method": "messages.setBotCallbackAnswer",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "alert",
          "type": "flags.1?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "message",
          "type": "flags.0?string"
        },
        {
          "name": "url",
          "type": "flags.2?string"
        },
        {
          "name": "cache_time",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    "messages.getPeerDialogs": {
      "id": 3832593661,
      "method": "messages.getPeerDialogs",
      "params": [
        {
          "name": "peers",
          "type": "Vector<InputDialogPeer>"
        }
      ],
      "type": "messages.PeerDialogs"
    },
    "messages.saveDraft": {
      "id": 3157909835,
      "method": "messages.saveDraft",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "no_webpage",
          "type": "flags.1?true"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "flags.3?Vector<MessageEntity>"
        }
      ],
      "type": "Bool"
    },
    "messages.getAllDrafts": {
      "id": 1782549861,
      "method": "messages.getAllDrafts",
      "params": [],
      "type": "Updates"
    },
    "messages.getFeaturedStickers": {
      "id": 766298703,
      "method": "messages.getFeaturedStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    "messages.readFeaturedStickers": {
      "id": 1527873830,
      "method": "messages.readFeaturedStickers",
      "params": [
        {
          "name": "id",
          "type": "Vector<long>"
        }
      ],
      "type": "Bool"
    },
    "messages.getRecentStickers": {
      "id": 1587647177,
      "method": "messages.getRecentStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attached",
          "type": "flags.0?true"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.RecentStickers"
    },
    "messages.saveRecentSticker": {
      "id": 958863608,
      "method": "messages.saveRecentSticker",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attached",
          "type": "flags.0?true"
        },
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unsave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    "messages.clearRecentStickers": {
      "id": 2308530221,
      "method": "messages.clearRecentStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "attached",
          "type": "flags.0?true"
        }
      ],
      "type": "Bool"
    },
    "messages.getArchivedStickers": {
      "id": 1475442322,
      "method": "messages.getArchivedStickers",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "offset_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.ArchivedStickers"
    },
    "messages.getMaskStickers": {
      "id": 1706608543,
      "method": "messages.getMaskStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.AllStickers"
    },
    "messages.getAttachedStickers": {
      "id": 3428542412,
      "method": "messages.getAttachedStickers",
      "params": [
        {
          "name": "media",
          "type": "InputStickeredMedia"
        }
      ],
      "type": "Vector<StickerSetCovered>"
    },
    "messages.setGameScore": {
      "id": 2398678208,
      "method": "messages.setGameScore",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "edit_message",
          "type": "flags.0?true"
        },
        {
          "name": "force",
          "type": "flags.1?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    "messages.setInlineGameScore": {
      "id": 363700068,
      "method": "messages.setInlineGameScore",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "edit_message",
          "type": "flags.0?true"
        },
        {
          "name": "force",
          "type": "flags.1?true"
        },
        {
          "name": "id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "score",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    "messages.getGameHighScores": {
      "id": 3894568093,
      "method": "messages.getGameHighScores",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "messages.HighScores"
    },
    "messages.getInlineGameHighScores": {
      "id": 258170395,
      "method": "messages.getInlineGameHighScores",
      "params": [
        {
          "name": "id",
          "type": "InputBotInlineMessageID"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "messages.HighScores"
    },
    "messages.getCommonChats": {
      "id": 218777796,
      "method": "messages.getCommonChats",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.Chats"
    },
    "messages.getAllChats": {
      "id": 3953659888,
      "method": "messages.getAllChats",
      "params": [
        {
          "name": "except_ids",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.Chats"
    },
    "messages.getWebPage": {
      "id": 852135825,
      "method": "messages.getWebPage",
      "params": [
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "WebPage"
    },
    "messages.toggleDialogPin": {
      "id": 2805064279,
      "method": "messages.toggleDialogPin",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pinned",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputDialogPeer"
        }
      ],
      "type": "Bool"
    },
    "messages.reorderPinnedDialogs": {
      "id": 991616823,
      "method": "messages.reorderPinnedDialogs",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "force",
          "type": "flags.0?true"
        },
        {
          "name": "folder_id",
          "type": "int"
        },
        {
          "name": "order",
          "type": "Vector<InputDialogPeer>"
        }
      ],
      "type": "Bool"
    },
    "messages.getPinnedDialogs": {
      "id": 3602468338,
      "method": "messages.getPinnedDialogs",
      "params": [
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "messages.PeerDialogs"
    },
    "messages.setBotShippingResults": {
      "id": 3858133754,
      "method": "messages.setBotShippingResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "error",
          "type": "flags.0?string"
        },
        {
          "name": "shipping_options",
          "type": "flags.1?Vector<ShippingOption>"
        }
      ],
      "type": "Bool"
    },
    "messages.setBotPrecheckoutResults": {
      "id": 163765653,
      "method": "messages.setBotPrecheckoutResults",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "success",
          "type": "flags.1?true"
        },
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "error",
          "type": "flags.0?string"
        }
      ],
      "type": "Bool"
    },
    "messages.uploadMedia": {
      "id": 1369162417,
      "method": "messages.uploadMedia",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "media",
          "type": "InputMedia"
        }
      ],
      "type": "MessageMedia"
    },
    "messages.sendScreenshotNotification": {
      "id": 3380473888,
      "method": "messages.sendScreenshotNotification",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "int"
        },
        {
          "name": "random_id",
          "type": "long"
        }
      ],
      "type": "Updates"
    },
    "messages.getFavedStickers": {
      "id": 567151374,
      "method": "messages.getFavedStickers",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.FavedStickers"
    },
    "messages.faveSticker": {
      "id": 3120547163,
      "method": "messages.faveSticker",
      "params": [
        {
          "name": "id",
          "type": "InputDocument"
        },
        {
          "name": "unfave",
          "type": "Bool"
        }
      ],
      "type": "Bool"
    },
    "messages.getUnreadMentions": {
      "id": 1180140658,
      "method": "messages.getUnreadMentions",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "offset_id",
          "type": "int"
        },
        {
          "name": "add_offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "int"
        },
        {
          "name": "min_id",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    "messages.readMentions": {
      "id": 251759059,
      "method": "messages.readMentions",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    "messages.getRecentLocations": {
      "id": 3150207753,
      "method": "messages.getRecentLocations",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    "messages.sendMultiMedia": {
      "id": 3422621899,
      "method": "messages.sendMultiMedia",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.5?true"
        },
        {
          "name": "background",
          "type": "flags.6?true"
        },
        {
          "name": "clear_draft",
          "type": "flags.7?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "reply_to_msg_id",
          "type": "flags.0?int"
        },
        {
          "name": "multi_media",
          "type": "Vector<InputSingleMedia>"
        },
        {
          "name": "schedule_date",
          "type": "flags.10?int"
        }
      ],
      "type": "Updates"
    },
    "messages.uploadEncryptedFile": {
      "id": 1347929239,
      "method": "messages.uploadEncryptedFile",
      "params": [
        {
          "name": "peer",
          "type": "InputEncryptedChat"
        },
        {
          "name": "file",
          "type": "InputEncryptedFile"
        }
      ],
      "type": "EncryptedFile"
    },
    "messages.searchStickerSets": {
      "id": 3266826379,
      "method": "messages.searchStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "exclude_featured",
          "type": "flags.0?true"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.FoundStickerSets"
    },
    "messages.getSplitRanges": {
      "id": 486505992,
      "method": "messages.getSplitRanges",
      "params": [],
      "type": "Vector<MessageRange>"
    },
    "messages.markDialogUnread": {
      "id": 3263617423,
      "method": "messages.markDialogUnread",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "unread",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputDialogPeer"
        }
      ],
      "type": "Bool"
    },
    "messages.getDialogUnreadMarks": {
      "id": 585256482,
      "method": "messages.getDialogUnreadMarks",
      "params": [],
      "type": "Vector<DialogPeer>"
    },
    "messages.clearAllDrafts": {
      "id": 2119757468,
      "method": "messages.clearAllDrafts",
      "params": [],
      "type": "Bool"
    },
    "messages.updatePinnedMessage": {
      "id": 3534419948,
      "method": "messages.updatePinnedMessage",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "silent",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    "messages.sendVote": {
      "id": 283795844,
      "method": "messages.sendVote",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "options",
          "type": "Vector<bytes>"
        }
      ],
      "type": "Updates"
    },
    "messages.getPollResults": {
      "id": 1941660731,
      "method": "messages.getPollResults",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    "messages.getOnlines": {
      "id": 1848369232,
      "method": "messages.getOnlines",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "ChatOnlines"
    },
    "messages.getStatsURL": {
      "id": 2167155430,
      "method": "messages.getStatsURL",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "params",
          "type": "string"
        }
      ],
      "type": "StatsURL"
    },
    "messages.editChatAbout": {
      "id": 3740665751,
      "method": "messages.editChatAbout",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "about",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    "messages.editChatDefaultBannedRights": {
      "id": 2777049921,
      "method": "messages.editChatDefaultBannedRights",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "Updates"
    },
    "messages.getEmojiKeywords": {
      "id": 899735650,
      "method": "messages.getEmojiKeywords",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "EmojiKeywordsDifference"
    },
    "messages.getEmojiKeywordsDifference": {
      "id": 352892591,
      "method": "messages.getEmojiKeywordsDifference",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        }
      ],
      "type": "EmojiKeywordsDifference"
    },
    "messages.getEmojiKeywordsLanguages": {
      "id": 1318675378,
      "method": "messages.getEmojiKeywordsLanguages",
      "params": [
        {
          "name": "lang_codes",
          "type": "Vector<string>"
        }
      ],
      "type": "Vector<EmojiLanguage>"
    },
    "messages.getEmojiURL": {
      "id": 3585149990,
      "method": "messages.getEmojiURL",
      "params": [
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "EmojiURL"
    },
    "messages.getSearchCounters": {
      "id": 1932455680,
      "method": "messages.getSearchCounters",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "filters",
          "type": "Vector<MessagesFilter>"
        }
      ],
      "type": "Vector<messages.SearchCounter>"
    },
    "messages.requestUrlAuth": {
      "id": 3812578835,
      "method": "messages.requestUrlAuth",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "button_id",
          "type": "int"
        }
      ],
      "type": "UrlAuthResult"
    },
    "messages.acceptUrlAuth": {
      "id": 4146719384,
      "method": "messages.acceptUrlAuth",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "write_allowed",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "button_id",
          "type": "int"
        }
      ],
      "type": "UrlAuthResult"
    },
    "messages.hidePeerSettingsBar": {
      "id": 1336717624,
      "method": "messages.hidePeerSettingsBar",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    "messages.getScheduledHistory": {
      "id": 3804391515,
      "method": "messages.getScheduledHistory",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.Messages"
    },
    "messages.getScheduledMessages": {
      "id": 3183150180,
      "method": "messages.getScheduledMessages",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.Messages"
    },
    "messages.sendScheduledMessages": {
      "id": 3174597898,
      "method": "messages.sendScheduledMessages",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Updates"
    },
    "messages.deleteScheduledMessages": {
      "id": 1504586518,
      "method": "messages.deleteScheduledMessages",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Updates"
    },
    "messages.getPollVotes": {
      "id": 3094231054,
      "method": "messages.getPollVotes",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "peer",
          "type": "InputPeer"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "option",
          "type": "flags.0?bytes"
        },
        {
          "name": "offset",
          "type": "flags.1?string"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "messages.VotesList"
    },
    "messages.toggleStickerSets": {
      "id": 3037016042,
      "method": "messages.toggleStickerSets",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "uninstall",
          "type": "flags.0?true"
        },
        {
          "name": "archive",
          "type": "flags.1?true"
        },
        {
          "name": "unarchive",
          "type": "flags.2?true"
        },
        {
          "name": "stickersets",
          "type": "Vector<InputStickerSet>"
        }
      ],
      "type": "Bool"
    },
    "messages.getDialogFilters": {
      "id": 4053719405,
      "method": "messages.getDialogFilters",
      "params": [],
      "type": "Vector<DialogFilter>"
    },
    "messages.getSuggestedDialogFilters": {
      "id": 2728186924,
      "method": "messages.getSuggestedDialogFilters",
      "params": [],
      "type": "Vector<DialogFilterSuggested>"
    },
    "messages.updateDialogFilter": {
      "id": 450142282,
      "method": "messages.updateDialogFilter",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "filter",
          "type": "flags.0?DialogFilter"
        }
      ],
      "type": "Bool"
    },
    "messages.updateDialogFiltersOrder": {
      "id": 3311649252,
      "method": "messages.updateDialogFiltersOrder",
      "params": [
        {
          "name": "order",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    "messages.getOldFeaturedStickers": {
      "id": 1608974939,
      "method": "messages.getOldFeaturedStickers",
      "params": [
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "messages.FeaturedStickers"
    },
    "updates.getState": {
      "id": 3990128682,
      "method": "updates.getState",
      "params": [],
      "type": "updates.State"
    },
    "updates.getDifference": {
      "id": 630429265,
      "method": "updates.getDifference",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "pts_total_limit",
          "type": "flags.0?int"
        },
        {
          "name": "date",
          "type": "int"
        },
        {
          "name": "qts",
          "type": "int"
        }
      ],
      "type": "updates.Difference"
    },
    "updates.getChannelDifference": {
      "id": 51854712,
      "method": "updates.getChannelDifference",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "force",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "filter",
          "type": "ChannelMessagesFilter"
        },
        {
          "name": "pts",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "updates.ChannelDifference"
    },
    "photos.updateProfilePhoto": {
      "id": 4038807890,
      "method": "photos.updateProfilePhoto",
      "params": [
        {
          "name": "id",
          "type": "InputPhoto"
        }
      ],
      "type": "UserProfilePhoto"
    },
    "photos.uploadProfilePhoto": {
      "id": 1328726168,
      "method": "photos.uploadProfilePhoto",
      "params": [
        {
          "name": "file",
          "type": "InputFile"
        }
      ],
      "type": "photos.Photo"
    },
    "photos.deletePhotos": {
      "id": 2278522671,
      "method": "photos.deletePhotos",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputPhoto>"
        }
      ],
      "type": "Vector<long>"
    },
    "photos.getUserPhotos": {
      "id": 2446144168,
      "method": "photos.getUserPhotos",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "max_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "photos.Photos"
    },
    "upload.saveFilePart": {
      "id": 3003426337,
      "method": "upload.saveFilePart",
      "params": [
        {
          "name": "file_id",
          "type": "long"
        },
        {
          "name": "file_part",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    "upload.getFile": {
      "id": 2975505148,
      "method": "upload.getFile",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "precise",
          "type": "flags.0?true"
        },
        {
          "name": "cdn_supported",
          "type": "flags.1?true"
        },
        {
          "name": "location",
          "type": "InputFileLocation"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "upload.File"
    },
    "upload.saveBigFilePart": {
      "id": 3732629309,
      "method": "upload.saveBigFilePart",
      "params": [
        {
          "name": "file_id",
          "type": "long"
        },
        {
          "name": "file_part",
          "type": "int"
        },
        {
          "name": "file_total_parts",
          "type": "int"
        },
        {
          "name": "bytes",
          "type": "bytes"
        }
      ],
      "type": "Bool"
    },
    "upload.getWebFile": {
      "id": 619086221,
      "method": "upload.getWebFile",
      "params": [
        {
          "name": "location",
          "type": "InputWebFileLocation"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "upload.WebFile"
    },
    "upload.getCdnFile": {
      "id": 536919235,
      "method": "upload.getCdnFile",
      "params": [
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "upload.CdnFile"
    },
    "upload.reuploadCdnFile": {
      "id": 2603046056,
      "method": "upload.reuploadCdnFile",
      "params": [
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "request_token",
          "type": "bytes"
        }
      ],
      "type": "Vector<FileHash>"
    },
    "upload.getCdnFileHashes": {
      "id": 1302676017,
      "method": "upload.getCdnFileHashes",
      "params": [
        {
          "name": "file_token",
          "type": "bytes"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "Vector<FileHash>"
    },
    "upload.getFileHashes": {
      "id": 3338819889,
      "method": "upload.getFileHashes",
      "params": [
        {
          "name": "location",
          "type": "InputFileLocation"
        },
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "Vector<FileHash>"
    },
    "help.getConfig": {
      "id": 3304659051,
      "method": "help.getConfig",
      "params": [],
      "type": "Config"
    },
    "help.getNearestDc": {
      "id": 531836966,
      "method": "help.getNearestDc",
      "params": [],
      "type": "NearestDc"
    },
    "help.getAppUpdate": {
      "id": 1378703997,
      "method": "help.getAppUpdate",
      "params": [
        {
          "name": "source",
          "type": "string"
        }
      ],
      "type": "help.AppUpdate"
    },
    "help.getInviteText": {
      "id": 1295590211,
      "method": "help.getInviteText",
      "params": [],
      "type": "help.InviteText"
    },
    "help.getSupport": {
      "id": 2631862477,
      "method": "help.getSupport",
      "params": [],
      "type": "help.Support"
    },
    "help.getAppChangelog": {
      "id": 2417028975,
      "method": "help.getAppChangelog",
      "params": [
        {
          "name": "prev_app_version",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    "help.setBotUpdatesStatus": {
      "id": 3961704397,
      "method": "help.setBotUpdatesStatus",
      "params": [
        {
          "name": "pending_updates_count",
          "type": "int"
        },
        {
          "name": "message",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    "help.getCdnConfig": {
      "id": 1375900482,
      "method": "help.getCdnConfig",
      "params": [],
      "type": "CdnConfig"
    },
    "help.getRecentMeUrls": {
      "id": 1036054804,
      "method": "help.getRecentMeUrls",
      "params": [
        {
          "name": "referer",
          "type": "string"
        }
      ],
      "type": "help.RecentMeUrls"
    },
    "help.getTermsOfServiceUpdate": {
      "id": 749019089,
      "method": "help.getTermsOfServiceUpdate",
      "params": [],
      "type": "help.TermsOfServiceUpdate"
    },
    "help.acceptTermsOfService": {
      "id": 4000511898,
      "method": "help.acceptTermsOfService",
      "params": [
        {
          "name": "id",
          "type": "DataJSON"
        }
      ],
      "type": "Bool"
    },
    "help.getDeepLinkInfo": {
      "id": 1072547679,
      "method": "help.getDeepLinkInfo",
      "params": [
        {
          "name": "path",
          "type": "string"
        }
      ],
      "type": "help.DeepLinkInfo"
    },
    "help.getAppConfig": {
      "id": 2559656208,
      "method": "help.getAppConfig",
      "params": [],
      "type": "JSONValue"
    },
    "help.saveAppLog": {
      "id": 1862465352,
      "method": "help.saveAppLog",
      "params": [
        {
          "name": "events",
          "type": "Vector<InputAppEvent>"
        }
      ],
      "type": "Bool"
    },
    "help.getPassportConfig": {
      "id": 3328290056,
      "method": "help.getPassportConfig",
      "params": [
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "help.PassportConfig"
    },
    "help.getSupportName": {
      "id": 3546343212,
      "method": "help.getSupportName",
      "params": [],
      "type": "help.SupportName"
    },
    "help.getUserInfo": {
      "id": 59377875,
      "method": "help.getUserInfo",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "help.UserInfo"
    },
    "help.editUserInfo": {
      "id": 1723407216,
      "method": "help.editUserInfo",
      "params": [
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "message",
          "type": "string"
        },
        {
          "name": "entities",
          "type": "Vector<MessageEntity>"
        }
      ],
      "type": "help.UserInfo"
    },
    "help.getPromoData": {
      "id": 3231151137,
      "method": "help.getPromoData",
      "params": [],
      "type": "help.PromoData"
    },
    "help.hidePromoData": {
      "id": 505748629,
      "method": "help.hidePromoData",
      "params": [
        {
          "name": "peer",
          "type": "InputPeer"
        }
      ],
      "type": "Bool"
    },
    "channels.readHistory": {
      "id": 3423619383,
      "method": "channels.readHistory",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    "channels.deleteMessages": {
      "id": 2227305806,
      "method": "channels.deleteMessages",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "messages.AffectedMessages"
    },
    "channels.deleteUserHistory": {
      "id": 3507345179,
      "method": "channels.deleteUserHistory",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "messages.AffectedHistory"
    },
    "channels.reportSpam": {
      "id": 4261967888,
      "method": "channels.reportSpam",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    "channels.getMessages": {
      "id": 2911672867,
      "method": "channels.getMessages",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "Vector<InputMessage>"
        }
      ],
      "type": "messages.Messages"
    },
    "channels.getParticipants": {
      "id": 306054633,
      "method": "channels.getParticipants",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "filter",
          "type": "ChannelParticipantsFilter"
        },
        {
          "name": "offset",
          "type": "int"
        },
        {
          "name": "limit",
          "type": "int"
        },
        {
          "name": "hash",
          "type": "int"
        }
      ],
      "type": "channels.ChannelParticipants"
    },
    "channels.getParticipant": {
      "id": 1416484774,
      "method": "channels.getParticipant",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        }
      ],
      "type": "channels.ChannelParticipant"
    },
    "channels.getChannels": {
      "id": 176122811,
      "method": "channels.getChannels",
      "params": [
        {
          "name": "id",
          "type": "Vector<InputChannel>"
        }
      ],
      "type": "messages.Chats"
    },
    "channels.getFullChannel": {
      "id": 141781513,
      "method": "channels.getFullChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "messages.ChatFull"
    },
    "channels.createChannel": {
      "id": 1029681423,
      "method": "channels.createChannel",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "broadcast",
          "type": "flags.0?true"
        },
        {
          "name": "megagroup",
          "type": "flags.1?true"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "about",
          "type": "string"
        },
        {
          "name": "geo_point",
          "type": "flags.2?InputGeoPoint"
        },
        {
          "name": "address",
          "type": "flags.2?string"
        }
      ],
      "type": "Updates"
    },
    "channels.editAdmin": {
      "id": 3543959810,
      "method": "channels.editAdmin",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "admin_rights",
          "type": "ChatAdminRights"
        },
        {
          "name": "rank",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    "channels.editTitle": {
      "id": 1450044624,
      "method": "channels.editTitle",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "title",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    "channels.editPhoto": {
      "id": 4046346185,
      "method": "channels.editPhoto",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "photo",
          "type": "InputChatPhoto"
        }
      ],
      "type": "Updates"
    },
    "channels.checkUsername": {
      "id": 283557164,
      "method": "channels.checkUsername",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    "channels.updateUsername": {
      "id": 890549214,
      "method": "channels.updateUsername",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "username",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    "channels.joinChannel": {
      "id": 615851205,
      "method": "channels.joinChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    "channels.leaveChannel": {
      "id": 4164332181,
      "method": "channels.leaveChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    "channels.inviteToChannel": {
      "id": 429865580,
      "method": "channels.inviteToChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "users",
          "type": "Vector<InputUser>"
        }
      ],
      "type": "Updates"
    },
    "channels.deleteChannel": {
      "id": 3222347747,
      "method": "channels.deleteChannel",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "Updates"
    },
    "channels.exportMessageLink": {
      "id": 3468128611,
      "method": "channels.exportMessageLink",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "int"
        },
        {
          "name": "grouped",
          "type": "Bool"
        }
      ],
      "type": "ExportedMessageLink"
    },
    "channels.toggleSignatures": {
      "id": 527021574,
      "method": "channels.toggleSignatures",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    "channels.getAdminedPublicChannels": {
      "id": 4172297903,
      "method": "channels.getAdminedPublicChannels",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "by_location",
          "type": "flags.0?true"
        },
        {
          "name": "check_limit",
          "type": "flags.1?true"
        }
      ],
      "type": "messages.Chats"
    },
    "channels.editBanned": {
      "id": 1920559378,
      "method": "channels.editBanned",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "banned_rights",
          "type": "ChatBannedRights"
        }
      ],
      "type": "Updates"
    },
    "channels.getAdminLog": {
      "id": 870184064,
      "method": "channels.getAdminLog",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "q",
          "type": "string"
        },
        {
          "name": "events_filter",
          "type": "flags.0?ChannelAdminLogEventsFilter"
        },
        {
          "name": "admins",
          "type": "flags.1?Vector<InputUser>"
        },
        {
          "name": "max_id",
          "type": "long"
        },
        {
          "name": "min_id",
          "type": "long"
        },
        {
          "name": "limit",
          "type": "int"
        }
      ],
      "type": "channels.AdminLogResults"
    },
    "channels.setStickers": {
      "id": 3935085817,
      "method": "channels.setStickers",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        }
      ],
      "type": "Bool"
    },
    "channels.readMessageContents": {
      "id": 3937786936,
      "method": "channels.readMessageContents",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "id",
          "type": "Vector<int>"
        }
      ],
      "type": "Bool"
    },
    "channels.deleteHistory": {
      "id": 2939592002,
      "method": "channels.deleteHistory",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "max_id",
          "type": "int"
        }
      ],
      "type": "Bool"
    },
    "channels.togglePreHistoryHidden": {
      "id": 3938171212,
      "method": "channels.togglePreHistoryHidden",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "enabled",
          "type": "Bool"
        }
      ],
      "type": "Updates"
    },
    "channels.getLeftChannels": {
      "id": 2202135744,
      "method": "channels.getLeftChannels",
      "params": [
        {
          "name": "offset",
          "type": "int"
        }
      ],
      "type": "messages.Chats"
    },
    "channels.getGroupsForDiscussion": {
      "id": 4124758904,
      "method": "channels.getGroupsForDiscussion",
      "params": [],
      "type": "messages.Chats"
    },
    "channels.setDiscussionGroup": {
      "id": 1079520178,
      "method": "channels.setDiscussionGroup",
      "params": [
        {
          "name": "broadcast",
          "type": "InputChannel"
        },
        {
          "name": "group",
          "type": "InputChannel"
        }
      ],
      "type": "Bool"
    },
    "channels.editCreator": {
      "id": 2402864415,
      "method": "channels.editCreator",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "password",
          "type": "InputCheckPasswordSRP"
        }
      ],
      "type": "Updates"
    },
    "channels.editLocation": {
      "id": 1491484525,
      "method": "channels.editLocation",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "geo_point",
          "type": "InputGeoPoint"
        },
        {
          "name": "address",
          "type": "string"
        }
      ],
      "type": "Bool"
    },
    "channels.toggleSlowMode": {
      "id": 3990134512,
      "method": "channels.toggleSlowMode",
      "params": [
        {
          "name": "channel",
          "type": "InputChannel"
        },
        {
          "name": "seconds",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    "channels.getInactiveChannels": {
      "id": 300429806,
      "method": "channels.getInactiveChannels",
      "params": [],
      "type": "messages.InactiveChats"
    },
    "bots.sendCustomRequest": {
      "id": 2854709741,
      "method": "bots.sendCustomRequest",
      "params": [
        {
          "name": "custom_method",
          "type": "string"
        },
        {
          "name": "params",
          "type": "DataJSON"
        }
      ],
      "type": "DataJSON"
    },
    "bots.answerWebhookJSONQuery": {
      "id": 3860938573,
      "method": "bots.answerWebhookJSONQuery",
      "params": [
        {
          "name": "query_id",
          "type": "long"
        },
        {
          "name": "data",
          "type": "DataJSON"
        }
      ],
      "type": "Bool"
    },
    "bots.setBotCommands": {
      "id": 2153596662,
      "method": "bots.setBotCommands",
      "params": [
        {
          "name": "commands",
          "type": "Vector<BotCommand>"
        }
      ],
      "type": "Bool"
    },
    "payments.getPaymentForm": {
      "id": 2582681413,
      "method": "payments.getPaymentForm",
      "params": [
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "payments.PaymentForm"
    },
    "payments.getPaymentReceipt": {
      "id": 2693966208,
      "method": "payments.getPaymentReceipt",
      "params": [
        {
          "name": "msg_id",
          "type": "int"
        }
      ],
      "type": "payments.PaymentReceipt"
    },
    "payments.validateRequestedInfo": {
      "id": 1997180532,
      "method": "payments.validateRequestedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "save",
          "type": "flags.0?true"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "info",
          "type": "PaymentRequestedInfo"
        }
      ],
      "type": "payments.ValidatedRequestedInfo"
    },
    "payments.sendPaymentForm": {
      "id": 730364339,
      "method": "payments.sendPaymentForm",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "msg_id",
          "type": "int"
        },
        {
          "name": "requested_info_id",
          "type": "flags.0?string"
        },
        {
          "name": "shipping_option_id",
          "type": "flags.1?string"
        },
        {
          "name": "credentials",
          "type": "InputPaymentCredentials"
        }
      ],
      "type": "payments.PaymentResult"
    },
    "payments.getSavedInfo": {
      "id": 578650699,
      "method": "payments.getSavedInfo",
      "params": [],
      "type": "payments.SavedInfo"
    },
    "payments.clearSavedInfo": {
      "id": 3627905217,
      "method": "payments.clearSavedInfo",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "credentials",
          "type": "flags.0?true"
        },
        {
          "name": "info",
          "type": "flags.1?true"
        }
      ],
      "type": "Bool"
    },
    "payments.getBankCardData": {
      "id": 779736953,
      "method": "payments.getBankCardData",
      "params": [
        {
          "name": "number",
          "type": "string"
        }
      ],
      "type": "payments.BankCardData"
    },
    "stickers.createStickerSet": {
      "id": 4043532160,
      "method": "stickers.createStickerSet",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "masks",
          "type": "flags.0?true"
        },
        {
          "name": "animated",
          "type": "flags.1?true"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "short_name",
          "type": "string"
        },
        {
          "name": "thumb",
          "type": "flags.2?InputDocument"
        },
        {
          "name": "stickers",
          "type": "Vector<InputStickerSetItem>"
        }
      ],
      "type": "messages.StickerSet"
    },
    "stickers.removeStickerFromSet": {
      "id": 4151709521,
      "method": "stickers.removeStickerFromSet",
      "params": [
        {
          "name": "sticker",
          "type": "InputDocument"
        }
      ],
      "type": "messages.StickerSet"
    },
    "stickers.changeStickerPosition": {
      "id": 4290172106,
      "method": "stickers.changeStickerPosition",
      "params": [
        {
          "name": "sticker",
          "type": "InputDocument"
        },
        {
          "name": "position",
          "type": "int"
        }
      ],
      "type": "messages.StickerSet"
    },
    "stickers.addStickerToSet": {
      "id": 2253651646,
      "method": "stickers.addStickerToSet",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "sticker",
          "type": "InputStickerSetItem"
        }
      ],
      "type": "messages.StickerSet"
    },
    "stickers.setStickerSetThumb": {
      "id": 2587250224,
      "method": "stickers.setStickerSetThumb",
      "params": [
        {
          "name": "stickerset",
          "type": "InputStickerSet"
        },
        {
          "name": "thumb",
          "type": "InputDocument"
        }
      ],
      "type": "messages.StickerSet"
    },
    "phone.getCallConfig": {
      "id": 1430593449,
      "method": "phone.getCallConfig",
      "params": [],
      "type": "DataJSON"
    },
    "phone.requestCall": {
      "id": 1124046573,
      "method": "phone.requestCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.0?true"
        },
        {
          "name": "user_id",
          "type": "InputUser"
        },
        {
          "name": "random_id",
          "type": "int"
        },
        {
          "name": "g_a_hash",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "phone.PhoneCall"
    },
    "phone.acceptCall": {
      "id": 1003664544,
      "method": "phone.acceptCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "g_b",
          "type": "bytes"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "phone.PhoneCall"
    },
    "phone.confirmCall": {
      "id": 788404002,
      "method": "phone.confirmCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "g_a",
          "type": "bytes"
        },
        {
          "name": "key_fingerprint",
          "type": "long"
        },
        {
          "name": "protocol",
          "type": "PhoneCallProtocol"
        }
      ],
      "type": "phone.PhoneCall"
    },
    "phone.receivedCall": {
      "id": 399855457,
      "method": "phone.receivedCall",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        }
      ],
      "type": "Bool"
    },
    "phone.discardCall": {
      "id": 2999697856,
      "method": "phone.discardCall",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "video",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "duration",
          "type": "int"
        },
        {
          "name": "reason",
          "type": "PhoneCallDiscardReason"
        },
        {
          "name": "connection_id",
          "type": "long"
        }
      ],
      "type": "Updates"
    },
    "phone.setCallRating": {
      "id": 1508562471,
      "method": "phone.setCallRating",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "user_initiative",
          "type": "flags.0?true"
        },
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "rating",
          "type": "int"
        },
        {
          "name": "comment",
          "type": "string"
        }
      ],
      "type": "Updates"
    },
    "phone.saveCallDebug": {
      "id": 662363518,
      "method": "phone.saveCallDebug",
      "params": [
        {
          "name": "peer",
          "type": "InputPhoneCall"
        },
        {
          "name": "debug",
          "type": "DataJSON"
        }
      ],
      "type": "Bool"
    },
    "langpack.getLangPack": {
      "id": 4075959050,
      "method": "langpack.getLangPack",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "LangPackDifference"
    },
    "langpack.getStrings": {
      "id": 4025104387,
      "method": "langpack.getStrings",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "keys",
          "type": "Vector<string>"
        }
      ],
      "type": "Vector<LangPackString>"
    },
    "langpack.getDifference": {
      "id": 3449309861,
      "method": "langpack.getDifference",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        },
        {
          "name": "from_version",
          "type": "int"
        }
      ],
      "type": "LangPackDifference"
    },
    "langpack.getLanguages": {
      "id": 1120311183,
      "method": "langpack.getLanguages",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        }
      ],
      "type": "Vector<LangPackLanguage>"
    },
    "langpack.getLanguage": {
      "id": 1784243458,
      "method": "langpack.getLanguage",
      "params": [
        {
          "name": "lang_pack",
          "type": "string"
        },
        {
          "name": "lang_code",
          "type": "string"
        }
      ],
      "type": "LangPackLanguage"
    },
    "folders.editPeerFolders": {
      "id": 1749536939,
      "method": "folders.editPeerFolders",
      "params": [
        {
          "name": "folder_peers",
          "type": "Vector<InputFolderPeer>"
        }
      ],
      "type": "Updates"
    },
    "folders.deleteFolder": {
      "id": 472471681,
      "method": "folders.deleteFolder",
      "params": [
        {
          "name": "folder_id",
          "type": "int"
        }
      ],
      "type": "Updates"
    },
    "stats.getBroadcastStats": {
      "id": 2873246746,
      "method": "stats.getBroadcastStats",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "dark",
          "type": "flags.0?true"
        },
        {
          "name": "channel",
          "type": "InputChannel"
        }
      ],
      "type": "stats.BroadcastStats"
    },
    "stats.loadAsyncGraph": {
      "id": 1646092192,
      "method": "stats.loadAsyncGraph",
      "params": [
        {
          "name": "flags",
          "type": "#"
        },
        {
          "name": "token",
          "type": "string"
        },
        {
          "name": "x",
          "type": "flags.0?long"
        }
      ],
      "type": "StatsGraph"
    }
  },
  "constructorsIdsByPredicate": {
    "vector": 481674261,
    "resPQ": 85337187,
    "p_q_inner_data": 2211011308,
    "p_q_inner_data_dc": 2851430293,
    "p_q_inner_data_temp": 1013613780,
    "p_q_inner_data_temp_dc": 1459478408,
    "server_DH_params_fail": 2043348061,
    "server_DH_params_ok": 3504867164,
    "server_DH_inner_data": 3045658042,
    "client_DH_inner_data": 1715713620,
    "dh_gen_ok": 1003222836,
    "dh_gen_retry": 1188831161,
    "dh_gen_fail": 2795351554,
    "rpc_result": 4082920705,
    "rpc_error": 558156313,
    "rpc_answer_unknown": 1579864942,
    "rpc_answer_dropped_running": 3447252358,
    "rpc_answer_dropped": 2755319991,
    "future_salt": 155834844,
    "future_salts": 2924480661,
    "pong": 880243653,
    "new_session_created": 2663516424,
    "msg_container": 1945237724,
    "message": 1160515173,
    "msg_copy": 3764405938,
    "gzip_packed": 812830625,
    "msgs_ack": 1658238041,
    "bad_msg_notification": 2817521681,
    "bad_server_salt": 3987424379,
    "msg_resend_req": 2105940488,
    "msg_resend_ans_req": 2249243371,
    "msgs_state_req": 3664378706,
    "msgs_state_info": 81704317,
    "msgs_all_info": 2361446705,
    "msg_detailed_info": 661470918,
    "msg_new_detailed_info": 2157819615,
    "bind_auth_key_inner": 1973679973,
    "destroy_auth_key_ok": 4133544404,
    "destroy_auth_key_none": 178201177,
    "destroy_auth_key_fail": 3926956819,
    "destroy_session_ok": 3793765884,
    "destroy_session_none": 1658015945,
    "boolFalse": 3162085175,
    "boolTrue": 2574415285,
    "true": 1072550713,
    "error": 3300522427,
    "null": 1450380236,
    "inputPeerEmpty": 2134579434,
    "inputPeerSelf": 2107670217,
    "inputPeerChat": 396093539,
    "inputPeerUser": 2072935910,
    "inputPeerChannel": 548253432,
    "inputPeerUserFromMessage": 398123750,
    "inputPeerChannelFromMessage": 2627073979,
    "inputUserEmpty": 3112732367,
    "inputUserSelf": 4156666175,
    "inputUser": 3626575894,
    "inputUserFromMessage": 756118935,
    "inputPhoneContact": 4086478836,
    "inputFile": 4113560191,
    "inputFileBig": 4199484341,
    "inputMediaEmpty": 2523198847,
    "inputMediaUploadedPhoto": 505969924,
    "inputMediaPhoto": 3015312949,
    "inputMediaGeoPoint": 4190388548,
    "inputMediaContact": 4171988475,
    "inputMediaUploadedDocument": 1530447553,
    "inputMediaDocument": 598418386,
    "inputMediaVenue": 3242007569,
    "inputMediaGifExternal": 1212395773,
    "inputMediaPhotoExternal": 3854302746,
    "inputMediaDocumentExternal": 4216511641,
    "inputMediaGame": 3544138739,
    "inputMediaInvoice": 4108359363,
    "inputMediaGeoLive": 3461251837,
    "inputMediaPoll": 261416433,
    "inputMediaDice": 3866083195,
    "inputChatPhotoEmpty": 480546647,
    "inputChatUploadedPhoto": 2457621940,
    "inputChatPhoto": 2303962423,
    "inputGeoPointEmpty": 3837862870,
    "inputGeoPoint": 4088900809,
    "inputPhotoEmpty": 483901197,
    "inputPhoto": 1001634122,
    "inputFileLocation": 3755650017,
    "inputEncryptedFileLocation": 4112735573,
    "inputDocumentFileLocation": 3134223748,
    "inputSecureFileLocation": 3418877480,
    "inputTakeoutFileLocation": 700340377,
    "inputPhotoFileLocation": 1075322878,
    "inputPhotoLegacyFileLocation": 3627312883,
    "inputPeerPhotoFileLocation": 668375447,
    "inputStickerSetThumb": 230353641,
    "peerUser": 2645671021,
    "peerChat": 3134252475,
    "peerChannel": 3185435954,
    "storage.fileUnknown": 2861972229,
    "storage.filePartial": 1086091090,
    "storage.fileJpeg": 8322574,
    "storage.fileGif": 3403786975,
    "storage.filePng": 172975040,
    "storage.filePdf": 2921222285,
    "storage.fileMp3": 1384777335,
    "storage.fileMov": 1258941372,
    "storage.fileMp4": 3016663268,
    "storage.fileWebp": 276907596,
    "userEmpty": 537022650,
    "user": 2474924225,
    "userProfilePhotoEmpty": 1326562017,
    "userProfilePhoto": 3973537164,
    "userStatusEmpty": 164646985,
    "userStatusOnline": 3988339017,
    "userStatusOffline": 9203775,
    "userStatusRecently": 3798942449,
    "userStatusLastWeek": 129960444,
    "userStatusLastMonth": 2011940674,
    "chatEmpty": 2611140608,
    "chat": 1004149726,
    "chatForbidden": 120753115,
    "channel": 3541734942,
    "channelForbidden": 681420594,
    "chatFull": 461151667,
    "channelFull": 4041631530,
    "chatParticipant": 3369552190,
    "chatParticipantCreator": 3658699658,
    "chatParticipantAdmin": 3805733942,
    "chatParticipantsForbidden": 4237298731,
    "chatParticipants": 1061556205,
    "chatPhotoEmpty": 935395612,
    "chatPhoto": 1197267925,
    "messageEmpty": 2212879956,
    "messageService": 2652479990,
    "messageMediaEmpty": 1038967584,
    "messageMediaPhoto": 1766936791,
    "messageMediaGeo": 1457575028,
    "messageMediaContact": 3421653312,
    "messageMediaUnsupported": 2676290718,
    "messageMediaDocument": 2628808919,
    "messageMediaWebPage": 2737690112,
    "messageMediaVenue": 784356159,
    "messageMediaGame": 4256272392,
    "messageMediaInvoice": 2220168007,
    "messageMediaGeoLive": 2084316681,
    "messageMediaPoll": 1272375192,
    "messageMediaDice": 1065280907,
    "messageActionEmpty": 3064919984,
    "messageActionChatCreate": 2791541658,
    "messageActionChatEditTitle": 3047280218,
    "messageActionChatEditPhoto": 2144015272,
    "messageActionChatDeletePhoto": 2514746351,
    "messageActionChatAddUser": 1217033015,
    "messageActionChatDeleteUser": 2997787404,
    "messageActionChatJoinedByLink": 4171036136,
    "messageActionChannelCreate": 2513611922,
    "messageActionChatMigrateTo": 1371385889,
    "messageActionChannelMigrateFrom": 2958420718,
    "messageActionPinMessage": 2495428845,
    "messageActionHistoryClear": 2679813636,
    "messageActionGameScore": 2460428406,
    "messageActionPaymentSentMe": 2402399015,
    "messageActionPaymentSent": 1080663248,
    "messageActionPhoneCall": 2162236031,
    "messageActionScreenshotTaken": 1200788123,
    "messageActionCustomAction": 4209418070,
    "messageActionBotAllowed": 2884218878,
    "messageActionSecureValuesSentMe": 455635795,
    "messageActionSecureValuesSent": 3646710100,
    "messageActionContactSignUp": 4092747638,
    "dialog": 739712882,
    "dialogFolder": 1908216652,
    "photoEmpty": 590459437,
    "photo": 3497329829,
    "photoSizeEmpty": 236446268,
    "photoSize": 2009052699,
    "photoCachedSize": 3920049402,
    "photoStrippedSize": 3769678894,
    "geoPointEmpty": 286776671,
    "geoPoint": 43446532,
    "auth.sentCode": 1577067778,
    "auth.authorization": 3439659286,
    "auth.authorizationSignUpRequired": 1148485274,
    "auth.exportedAuthorization": 3751189549,
    "inputNotifyPeer": 3099351820,
    "inputNotifyUsers": 423314455,
    "inputNotifyChats": 1251338318,
    "inputNotifyBroadcasts": 2983951486,
    "inputPeerNotifySettings": 2621249934,
    "peerNotifySettings": 2941295904,
    "peerSettings": 2172921549,
    "wallPaper": 2755118061,
    "wallPaperNoFile": 2331249445,
    "inputReportReasonSpam": 1490799288,
    "inputReportReasonViolence": 505595789,
    "inputReportReasonPornography": 777640226,
    "inputReportReasonChildAbuse": 2918469347,
    "inputReportReasonOther": 3782503690,
    "inputReportReasonCopyright": 2609510714,
    "inputReportReasonGeoIrrelevant": 3688169197,
    "userFull": 3992026130,
    "contact": 4178692500,
    "importedContact": 3489825848,
    "contactBlocked": 1444661369,
    "contactStatus": 3546811489,
    "contacts.contactsNotModified": 3075189202,
    "contacts.contacts": 3941105218,
    "contacts.importedContacts": 2010127419,
    "contacts.blocked": 471043349,
    "contacts.blockedSlice": 2416444065,
    "messages.dialogs": 364538944,
    "messages.dialogsSlice": 1910543603,
    "messages.dialogsNotModified": 4041467286,
    "messages.messages": 2356252295,
    "messages.messagesSlice": 3371027998,
    "messages.channelMessages": 2569416247,
    "messages.messagesNotModified": 1951620897,
    "messages.chats": 1694474197,
    "messages.chatsSlice": 2631405892,
    "messages.chatFull": 3856126364,
    "messages.affectedHistory": 3025955281,
    "inputMessagesFilterEmpty": 1474492012,
    "inputMessagesFilterPhotos": 2517214492,
    "inputMessagesFilterVideo": 2680163941,
    "inputMessagesFilterPhotoVideo": 1458172132,
    "inputMessagesFilterDocument": 2665345416,
    "inputMessagesFilterUrl": 2129714567,
    "inputMessagesFilterGif": 4291323271,
    "inputMessagesFilterVoice": 1358283666,
    "inputMessagesFilterMusic": 928101534,
    "inputMessagesFilterChatPhotos": 975236280,
    "inputMessagesFilterPhoneCalls": 2160695144,
    "inputMessagesFilterRoundVoice": 2054952868,
    "inputMessagesFilterRoundVideo": 3041516115,
    "inputMessagesFilterMyMentions": 3254314650,
    "inputMessagesFilterGeo": 3875695885,
    "inputMessagesFilterContacts": 3764575107,
    "updateNewMessage": 522914557,
    "updateMessageID": 1318109142,
    "updateDeleteMessages": 2718806245,
    "updateUserTyping": 1548249383,
    "updateChatUserTyping": 2590370335,
    "updateChatParticipants": 125178264,
    "updateUserStatus": 469489699,
    "updateUserName": 2805148531,
    "updateUserPhoto": 2503031564,
    "updateNewEncryptedMessage": 314359194,
    "updateEncryptedChatTyping": 386986326,
    "updateEncryption": 3030575245,
    "updateEncryptedMessagesRead": 956179895,
    "updateChatParticipantAdd": 3930787420,
    "updateChatParticipantDelete": 1851755554,
    "updateDcOptions": 2388564083,
    "updateUserBlocked": 2163009562,
    "updateNotifySettings": 3200411887,
    "updateServiceNotification": 3957614617,
    "updatePrivacy": 3996854058,
    "updateUserPhone": 314130811,
    "updateReadHistoryInbox": 2627162079,
    "updateReadHistoryOutbox": 791617983,
    "updateWebPage": 2139689491,
    "updateReadMessagesContents": 1757493555,
    "updateChannelTooLong": 3942934523,
    "updateChannel": 3067369046,
    "updateNewChannelMessage": 1656358105,
    "updateReadChannelInbox": 856380452,
    "updateDeleteChannelMessages": 3279233481,
    "updateChannelMessageViews": 2560699211,
    "updateChatParticipantAdmin": 3062896985,
    "updateNewStickerSet": 1753886890,
    "updateStickerSetsOrder": 196268545,
    "updateStickerSets": 1135492588,
    "updateSavedGifs": 2473931806,
    "updateBotInlineQuery": 1417832080,
    "updateBotInlineSend": 239663460,
    "updateEditChannelMessage": 457133559,
    "updateChannelPinnedMessage": 2555978869,
    "updateBotCallbackQuery": 3879028705,
    "updateEditMessage": 3825430691,
    "updateInlineBotCallbackQuery": 4191320666,
    "updateReadChannelOutbox": 634833351,
    "updateDraftMessage": 3995842921,
    "updateReadFeaturedStickers": 1461528386,
    "updateRecentStickers": 2588027936,
    "updateConfig": 2720652550,
    "updatePtsChanged": 861169551,
    "updateChannelWebPage": 1081547008,
    "updateDialogPinned": 1852826908,
    "updatePinnedDialogs": 4195302562,
    "updateBotWebhookJSON": 2199371971,
    "updateBotWebhookJSONQuery": 2610053286,
    "updateBotShippingQuery": 3771582784,
    "updateBotPrecheckoutQuery": 1563376297,
    "updatePhoneCall": 2869914398,
    "updateLangPackTooLong": 1180041828,
    "updateLangPack": 1442983757,
    "updateFavedStickers": 3843135853,
    "updateChannelReadMessagesContents": 2307472197,
    "updateContactsReset": 1887741886,
    "updateChannelAvailableMessages": 1893427255,
    "updateDialogUnreadMark": 3781450179,
    "updateUserPinnedMessage": 1279515160,
    "updateChatPinnedMessage": 3775771465,
    "updateMessagePoll": 2896258427,
    "updateChatDefaultBannedRights": 1421875280,
    "updateFolderPeers": 422972864,
    "updatePeerSettings": 1786671974,
    "updatePeerLocated": 3031420848,
    "updateNewScheduledMessage": 967122427,
    "updateDeleteScheduledMessages": 2424728814,
    "updateTheme": 2182544291,
    "updateGeoLiveViewed": 2267003193,
    "updateLoginToken": 1448076945,
    "updateMessagePollVote": 1123585836,
    "updateDialogFilter": 654302845,
    "updateDialogFilterOrder": 2782339333,
    "updateDialogFilters": 889491791,
    "updates.state": 2775329342,
    "updates.differenceEmpty": 1567990072,
    "updates.difference": 16030880,
    "updates.differenceSlice": 2835028353,
    "updates.differenceTooLong": 1258196845,
    "updatesTooLong": 3809980286,
    "updateShortMessage": 2437922577,
    "updateShortChatMessage": 377562760,
    "updateShort": 2027216577,
    "updatesCombined": 1918567619,
    "updates": 1957577280,
    "updateShortSentMessage": 301019932,
    "photos.photos": 2378853029,
    "photos.photosSlice": 352657236,
    "photos.photo": 539045032,
    "upload.file": 157948117,
    "upload.fileCdnRedirect": 4052539972,
    "dcOption": 414687501,
    "config": 856375399,
    "nearestDc": 2384074613,
    "help.appUpdate": 497489295,
    "help.noAppUpdate": 3294258486,
    "help.inviteText": 415997816,
    "encryptedChatEmpty": 2877210784,
    "encryptedChatWaiting": 1006044124,
    "encryptedChatRequested": 3363328638,
    "encryptedChat": 4199992886,
    "encryptedChatDiscarded": 332848423,
    "inputEncryptedChat": 4047615457,
    "encryptedFileEmpty": 3256830334,
    "encryptedFile": 1248893260,
    "inputEncryptedFileEmpty": 406307684,
    "inputEncryptedFileUploaded": 1690108678,
    "inputEncryptedFile": 1511503333,
    "inputEncryptedFileBigUploaded": 767652808,
    "encryptedMessage": 3977822488,
    "encryptedMessageService": 594758406,
    "messages.dhConfigNotModified": 3236054581,
    "messages.dhConfig": 740433629,
    "messages.sentEncryptedMessage": 1443858741,
    "messages.sentEncryptedFile": 2492727090,
    "inputDocumentEmpty": 1928391342,
    "inputDocument": 448771445,
    "documentEmpty": 922273905,
    "document": 2611125441,
    "help.support": 398898678,
    "notifyPeer": 2681474008,
    "notifyUsers": 3033021260,
    "notifyChats": 3221737155,
    "notifyBroadcasts": 3591563503,
    "sendMessageTypingAction": 381645902,
    "sendMessageCancelAction": 4250847477,
    "sendMessageRecordVideoAction": 2710034031,
    "sendMessageUploadVideoAction": 3916839660,
    "sendMessageRecordAudioAction": 3576656887,
    "sendMessageUploadAudioAction": 4082227115,
    "sendMessageUploadPhotoAction": 3520285222,
    "sendMessageUploadDocumentAction": 2852968932,
    "sendMessageGeoLocationAction": 393186209,
    "sendMessageChooseContactAction": 1653390447,
    "sendMessageGamePlayAction": 3714748232,
    "sendMessageRecordRoundAction": 2297593788,
    "sendMessageUploadRoundAction": 608050278,
    "contacts.found": 3004386717,
    "inputPrivacyKeyStatusTimestamp": 1335282456,
    "inputPrivacyKeyChatInvite": 3187344422,
    "inputPrivacyKeyPhoneCall": 4206550111,
    "inputPrivacyKeyPhoneP2P": 3684593874,
    "inputPrivacyKeyForwards": 2765966344,
    "inputPrivacyKeyProfilePhoto": 1461304012,
    "inputPrivacyKeyPhoneNumber": 55761658,
    "inputPrivacyKeyAddedByPhone": 3508640733,
    "privacyKeyStatusTimestamp": 3157175088,
    "privacyKeyChatInvite": 1343122938,
    "privacyKeyPhoneCall": 1030105979,
    "privacyKeyPhoneP2P": 961092808,
    "privacyKeyForwards": 1777096355,
    "privacyKeyProfilePhoto": 2517966829,
    "privacyKeyPhoneNumber": 3516589165,
    "privacyKeyAddedByPhone": 1124062251,
    "inputPrivacyValueAllowContacts": 218751099,
    "inputPrivacyValueAllowAll": 407582158,
    "inputPrivacyValueAllowUsers": 320652927,
    "inputPrivacyValueDisallowContacts": 195371015,
    "inputPrivacyValueDisallowAll": 3597362889,
    "inputPrivacyValueDisallowUsers": 2417034343,
    "inputPrivacyValueAllowChatParticipants": 1283572154,
    "inputPrivacyValueDisallowChatParticipants": 3626197935,
    "privacyValueAllowContacts": 4294843308,
    "privacyValueAllowAll": 1698855810,
    "privacyValueAllowUsers": 1297858060,
    "privacyValueDisallowContacts": 4169726490,
    "privacyValueDisallowAll": 2339628899,
    "privacyValueDisallowUsers": 209668535,
    "privacyValueAllowChatParticipants": 415136107,
    "privacyValueDisallowChatParticipants": 2897086096,
    "account.privacyRules": 1352683077,
    "accountDaysTTL": 3100684255,
    "documentAttributeImageSize": 1815593308,
    "documentAttributeAnimated": 297109817,
    "documentAttributeSticker": 1662637586,
    "documentAttributeVideo": 250621158,
    "documentAttributeAudio": 2555574726,
    "documentAttributeFilename": 358154344,
    "documentAttributeHasStickers": 2550256375,
    "messages.stickersNotModified": 4050950690,
    "messages.stickers": 3831077821,
    "stickerPack": 313694676,
    "messages.allStickersNotModified": 3898999491,
    "messages.allStickers": 3992797279,
    "messages.affectedMessages": 2228326789,
    "webPageEmpty": 3943987176,
    "webPagePending": 3313949212,
    "webPage": 3902555570,
    "webPageNotModified": 1930545681,
    "authorization": 2902578717,
    "account.authorizations": 307276766,
    "account.password": 2904965624,
    "account.passwordSettings": 2589733861,
    "account.passwordInputSettings": 3258394569,
    "auth.passwordRecovery": 326715557,
    "receivedNotifyMessage": 2743383929,
    "chatInviteEmpty": 1776236393,
    "chatInviteExported": 4230874556,
    "chatInviteAlready": 1516793212,
    "chatInvite": 3754096014,
    "inputStickerSetEmpty": 4290128789,
    "inputStickerSetID": 2649203305,
    "inputStickerSetShortName": 2250033312,
    "inputStickerSetAnimatedEmoji": 42402760,
    "inputStickerSetDice": 3867103758,
    "stickerSet": 4004802343,
    "messages.stickerSet": 3054118054,
    "botCommand": 3262826695,
    "botInfo": 2565348666,
    "keyboardButton": 2734311552,
    "keyboardButtonUrl": 629866245,
    "keyboardButtonCallback": 1748655686,
    "keyboardButtonRequestPhone": 2976541737,
    "keyboardButtonRequestGeoLocation": 4235815743,
    "keyboardButtonSwitchInline": 90744648,
    "keyboardButtonGame": 1358175439,
    "keyboardButtonBuy": 2950250427,
    "keyboardButtonUrlAuth": 280464681,
    "inputKeyboardButtonUrlAuth": 3492708308,
    "keyboardButtonRequestPoll": 3150401885,
    "keyboardButtonRow": 2002815875,
    "replyKeyboardHide": 2688441221,
    "replyKeyboardForceReply": 4094724768,
    "replyKeyboardMarkup": 889353612,
    "replyInlineMarkup": 1218642516,
    "messageEntityUnknown": 3146955413,
    "messageEntityMention": 4194588573,
    "messageEntityHashtag": 1868782349,
    "messageEntityBotCommand": 1827637959,
    "messageEntityUrl": 1859134776,
    "messageEntityEmail": 1692693954,
    "messageEntityBold": 3177253833,
    "messageEntityItalic": 2188348256,
    "messageEntityCode": 681706865,
    "messageEntityPre": 1938967520,
    "messageEntityTextUrl": 1990644519,
    "messageEntityMentionName": 892193368,
    "inputMessageEntityMentionName": 546203849,
    "messageEntityPhone": 2607407947,
    "messageEntityCashtag": 1280209983,
    "messageEntityUnderline": 2622389899,
    "messageEntityStrike": 3204879316,
    "messageEntityBlockquote": 34469328,
    "messageEntityBankCard": 1981704948,
    "inputChannelEmpty": 4002160262,
    "inputChannel": 2951442734,
    "inputChannelFromMessage": 707290417,
    "contacts.resolvedPeer": 2131196633,
    "messageRange": 182649427,
    "updates.channelDifferenceEmpty": 1041346555,
    "updates.channelDifferenceTooLong": 2763835134,
    "updates.channelDifference": 543450958,
    "channelMessagesFilterEmpty": 2496933607,
    "channelMessagesFilter": 3447183703,
    "channelParticipant": 367766557,
    "channelParticipantSelf": 2737347181,
    "channelParticipantCreator": 2156729764,
    "channelParticipantAdmin": 3435051951,
    "channelParticipantBanned": 470789295,
    "channelParticipantsRecent": 3728686201,
    "channelParticipantsAdmins": 3026225513,
    "channelParticipantsKicked": 2746567045,
    "channelParticipantsBots": 2966521435,
    "channelParticipantsBanned": 338142689,
    "channelParticipantsSearch": 106343499,
    "channelParticipantsContacts": 3144345741,
    "channels.channelParticipants": 4117684904,
    "channels.channelParticipantsNotModified": 4028055529,
    "channels.channelParticipant": 3503927651,
    "help.termsOfService": 2013922064,
    "foundGif": 372165663,
    "foundGifCached": 2624914441,
    "messages.foundGifs": 1158290442,
    "messages.savedGifsNotModified": 3892468898,
    "messages.savedGifs": 772213157,
    "inputBotInlineMessageMediaAuto": 864077702,
    "inputBotInlineMessageText": 1036876423,
    "inputBotInlineMessageMediaGeo": 3249626469,
    "inputBotInlineMessageMediaVenue": 1098628881,
    "inputBotInlineMessageMediaContact": 2800599037,
    "inputBotInlineMessageGame": 1262639204,
    "inputBotInlineResult": 2294256409,
    "inputBotInlineResultPhoto": 2832753831,
    "inputBotInlineResultDocument": 4294507972,
    "inputBotInlineResultGame": 1336154098,
    "botInlineMessageMediaAuto": 1984755728,
    "botInlineMessageText": 2357159394,
    "botInlineMessageMediaGeo": 3072515685,
    "botInlineMessageMediaVenue": 2324063644,
    "botInlineMessageMediaContact": 416402882,
    "botInlineResult": 295067450,
    "botInlineMediaResult": 400266251,
    "messages.botResults": 2491197512,
    "exportedMessageLink": 1571494644,
    "messageFwdHeader": 893020267,
    "auth.codeTypeSms": 1923290508,
    "auth.codeTypeCall": 1948046307,
    "auth.codeTypeFlashCall": 577556219,
    "auth.sentCodeTypeApp": 1035688326,
    "auth.sentCodeTypeSms": 3221273506,
    "auth.sentCodeTypeCall": 1398007207,
    "auth.sentCodeTypeFlashCall": 2869151449,
    "messages.botCallbackAnswer": 911761060,
    "messages.messageEditData": 649453030,
    "inputBotInlineMessageID": 2299280777,
    "inlineBotSwitchPM": 1008755359,
    "messages.peerDialogs": 863093588,
    "topPeer": 3989684315,
    "topPeerCategoryBotsPM": 2875595611,
    "topPeerCategoryBotsInline": 344356834,
    "topPeerCategoryCorrespondents": 104314861,
    "topPeerCategoryGroups": 3172442442,
    "topPeerCategoryChannels": 371037736,
    "topPeerCategoryPhoneCalls": 511092620,
    "topPeerCategoryForwardUsers": 2822794409,
    "topPeerCategoryForwardChats": 4226728176,
    "topPeerCategoryPeers": 4219683473,
    "contacts.topPeersNotModified": 3727060725,
    "contacts.topPeers": 1891070632,
    "contacts.topPeersDisabled": 3039597469,
    "draftMessageEmpty": 453805082,
    "draftMessage": 4253970719,
    "messages.featuredStickersNotModified": 3336309862,
    "messages.featuredStickers": 3064709953,
    "messages.recentStickersNotModified": 186120336,
    "messages.recentStickers": 586395571,
    "messages.archivedStickers": 1338747336,
    "messages.stickerSetInstallResultSuccess": 946083368,
    "messages.stickerSetInstallResultArchive": 904138920,
    "stickerSetCovered": 1678812626,
    "stickerSetMultiCovered": 872932635,
    "maskCoords": 2933316530,
    "inputStickeredMediaPhoto": 1251549527,
    "inputStickeredMediaDocument": 70813275,
    "game": 3187238203,
    "inputGameID": 53231223,
    "inputGameShortName": 3274827786,
    "highScore": 1493171408,
    "messages.highScores": 2587622809,
    "textEmpty": 3695018575,
    "textPlain": 1950782688,
    "textBold": 1730456516,
    "textItalic": 3641877916,
    "textUnderline": 3240501956,
    "textStrike": 2616769429,
    "textFixed": 1816074681,
    "textUrl": 1009288385,
    "textEmail": 3730443734,
    "textConcat": 2120376535,
    "textSubscript": 3983181060,
    "textSuperscript": 3355139585,
    "textMarked": 55281185,
    "textPhone": 483104362,
    "textImage": 136105807,
    "textAnchor": 894777186,
    "pageBlockUnsupported": 324435594,
    "pageBlockTitle": 1890305021,
    "pageBlockSubtitle": 2415565343,
    "pageBlockAuthorDate": 3132089824,
    "pageBlockHeader": 3218105580,
    "pageBlockSubheader": 4046173921,
    "pageBlockParagraph": 1182402406,
    "pageBlockPreformatted": 3228621118,
    "pageBlockFooter": 1216809369,
    "pageBlockDivider": 3676352904,
    "pageBlockAnchor": 3456972720,
    "pageBlockList": 3840442385,
    "pageBlockBlockquote": 641563686,
    "pageBlockPullquote": 1329878739,
    "pageBlockPhoto": 391759200,
    "pageBlockVideo": 2089805750,
    "pageBlockCover": 972174080,
    "pageBlockEmbed": 2826014149,
    "pageBlockEmbedPost": 4065961995,
    "pageBlockCollage": 1705048653,
    "pageBlockSlideshow": 52401552,
    "pageBlockChannel": 4011282869,
    "pageBlockAudio": 2151899626,
    "pageBlockKicker": 504660880,
    "pageBlockTable": 3209554562,
    "pageBlockOrderedList": 2592793057,
    "pageBlockDetails": 1987480557,
    "pageBlockRelatedArticles": 370236054,
    "pageBlockMap": 2756656886,
    "phoneCallDiscardReasonMissed": 2246320897,
    "phoneCallDiscardReasonDisconnect": 3767910816,
    "phoneCallDiscardReasonHangup": 1471006352,
    "phoneCallDiscardReasonBusy": 4210550985,
    "dataJSON": 2104790276,
    "labeledPrice": 3408489464,
    "invoice": 3272254296,
    "paymentCharge": 3926049406,
    "postAddress": 512535275,
    "paymentRequestedInfo": 2426158996,
    "paymentSavedCredentialsCard": 3452074527,
    "webDocument": 475467473,
    "webDocumentNoProxy": 4190682310,
    "inputWebDocument": 2616017741,
    "inputWebFileLocation": 3258570374,
    "inputWebFileGeoPointLocation": 2669814217,
    "upload.webFile": 568808380,
    "payments.paymentForm": 1062645411,
    "payments.validatedRequestedInfo": 3510966403,
    "payments.paymentResult": 1314881805,
    "payments.paymentVerificationNeeded": 3628142905,
    "payments.paymentReceipt": 1342771681,
    "payments.savedInfo": 4220511292,
    "inputPaymentCredentialsSaved": 3238965967,
    "inputPaymentCredentials": 873977640,
    "inputPaymentCredentialsApplePay": 178373535,
    "inputPaymentCredentialsAndroidPay": 3389379854,
    "account.tmpPassword": 3680828724,
    "shippingOption": 3055631583,
    "inputStickerSetItem": 4288717974,
    "inputPhoneCall": 506920429,
    "phoneCallEmpty": 1399245077,
    "phoneCallWaiting": 462375633,
    "phoneCallRequested": 2280307539,
    "phoneCallAccepted": 2575058250,
    "phoneCall": 2269294207,
    "phoneCallDiscarded": 1355435489,
    "phoneConnection": 2639009728,
    "phoneCallProtocol": 4236742600,
    "phone.phoneCall": 3968000320,
    "upload.cdnFileReuploadNeeded": 4004045934,
    "upload.cdnFile": 2845821519,
    "cdnPublicKey": 3380800186,
    "cdnConfig": 1462101002,
    "langPackString": 3402727926,
    "langPackStringPluralized": 1816636575,
    "langPackStringDeleted": 695856818,
    "langPackDifference": 4085629430,
    "langPackLanguage": 4006239459,
    "channelAdminLogEventActionChangeTitle": 3873421349,
    "channelAdminLogEventActionChangeAbout": 1427671598,
    "channelAdminLogEventActionChangeUsername": 1783299128,
    "channelAdminLogEventActionChangePhoto": 1129042607,
    "channelAdminLogEventActionToggleInvites": 460916654,
    "channelAdminLogEventActionToggleSignatures": 648939889,
    "channelAdminLogEventActionUpdatePinned": 3924306968,
    "channelAdminLogEventActionEditMessage": 1889215493,
    "channelAdminLogEventActionDeleteMessage": 1121994683,
    "channelAdminLogEventActionParticipantJoin": 405815507,
    "channelAdminLogEventActionParticipantLeave": 4170676210,
    "channelAdminLogEventActionParticipantInvite": 3810276568,
    "channelAdminLogEventActionParticipantToggleBan": 3872931198,
    "channelAdminLogEventActionParticipantToggleAdmin": 3580323600,
    "channelAdminLogEventActionChangeStickerSet": 2982398631,
    "channelAdminLogEventActionTogglePreHistoryHidden": 1599903217,
    "channelAdminLogEventActionDefaultBannedRights": 771095562,
    "channelAdminLogEventActionStopPoll": 2399639107,
    "channelAdminLogEventActionChangeLinkedChat": 2725218331,
    "channelAdminLogEventActionChangeLocation": 241923758,
    "channelAdminLogEventActionToggleSlowMode": 1401984889,
    "channelAdminLogEvent": 995769920,
    "channels.adminLogResults": 3985307469,
    "channelAdminLogEventsFilter": 3926948580,
    "popularContact": 1558266229,
    "messages.favedStickersNotModified": 2660214483,
    "messages.favedStickers": 4085198614,
    "recentMeUrlUnknown": 1189204285,
    "recentMeUrlUser": 2377921334,
    "recentMeUrlChat": 2686132985,
    "recentMeUrlChatInvite": 3947431965,
    "recentMeUrlStickerSet": 3154794460,
    "help.recentMeUrls": 235081943,
    "inputSingleMedia": 482797855,
    "webAuthorization": 3402187762,
    "account.webAuthorizations": 3981887996,
    "inputMessageID": 2792792866,
    "inputMessageReplyTo": 3134751637,
    "inputMessagePinned": 2257003832,
    "inputDialogPeer": 4239064759,
    "inputDialogPeerFolder": 1684014375,
    "dialogPeer": 3849174789,
    "dialogPeerFolder": 1363483106,
    "messages.foundStickerSetsNotModified": 223655517,
    "messages.foundStickerSets": 1359533640,
    "fileHash": 1648543603,
    "inputClientProxy": 1968737087,
    "help.termsOfServiceUpdateEmpty": 3811614591,
    "help.termsOfServiceUpdate": 686618977,
    "inputSecureFileUploaded": 859091184,
    "inputSecureFile": 1399317950,
    "secureFileEmpty": 1679398724,
    "secureFile": 3760683618,
    "secureData": 2330640067,
    "securePlainPhone": 2103482845,
    "securePlainEmail": 569137759,
    "secureValueTypePersonalDetails": 2636808675,
    "secureValueTypePassport": 1034709504,
    "secureValueTypeDriverLicense": 115615172,
    "secureValueTypeIdentityCard": 2698015819,
    "secureValueTypeInternalPassport": 2577698595,
    "secureValueTypeAddress": 3420659238,
    "secureValueTypeUtilityBill": 4231435598,
    "secureValueTypeBankStatement": 2299755533,
    "secureValueTypeRentalAgreement": 2340959368,
    "secureValueTypePassportRegistration": 2581823594,
    "secureValueTypeTemporaryRegistration": 3926060083,
    "secureValueTypePhone": 3005262555,
    "secureValueTypeEmail": 2386339822,
    "secureValue": 411017418,
    "inputSecureValue": 3676426407,
    "secureValueHash": 3978218928,
    "secureValueErrorData": 3903065049,
    "secureValueErrorFrontSide": 12467706,
    "secureValueErrorReverseSide": 2257201829,
    "secureValueErrorSelfie": 3845639894,
    "secureValueErrorFile": 2054162547,
    "secureValueErrorFiles": 1717706985,
    "secureValueError": 2258466191,
    "secureValueErrorTranslationFile": 2702460784,
    "secureValueErrorTranslationFiles": 878931416,
    "secureCredentialsEncrypted": 871426631,
    "account.authorizationForm": 2905480408,
    "account.sentEmailCode": 2166326607,
    "help.deepLinkInfoEmpty": 1722786150,
    "help.deepLinkInfo": 1783556146,
    "savedPhoneContact": 289586518,
    "account.takeout": 1304052993,
    "passwordKdfAlgoUnknown": 3562713238,
    "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow": 982592842,
    "securePasswordKdfAlgoUnknown": 4883767,
    "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000": 3153255840,
    "securePasswordKdfAlgoSHA512": 2252807570,
    "secureSecretSettings": 354925740,
    "inputCheckPasswordEmpty": 2558588504,
    "inputCheckPasswordSRP": 3531600002,
    "secureRequiredType": 2191366618,
    "secureRequiredTypeOneOf": 41187252,
    "help.passportConfigNotModified": 3216634967,
    "help.passportConfig": 2694370991,
    "inputAppEvent": 488313413,
    "jsonObjectValue": 3235781593,
    "jsonNull": 1064139624,
    "jsonBool": 3342098026,
    "jsonNumber": 736157604,
    "jsonString": 3072226938,
    "jsonArray": 4148447075,
    "jsonObject": 2579616925,
    "pageTableCell": 878078826,
    "pageTableRow": 3770729957,
    "pageCaption": 1869903447,
    "pageListItemText": 3106911949,
    "pageListItemBlocks": 635466748,
    "pageListOrderedItemText": 1577484359,
    "pageListOrderedItemBlocks": 2564655414,
    "pageRelatedArticle": 3012615176,
    "page": 2556788493,
    "help.supportName": 2349199817,
    "help.userInfoEmpty": 4088278765,
    "help.userInfo": 32192344,
    "pollAnswer": 1823064809,
    "poll": 2262925665,
    "pollAnswerVoters": 997055186,
    "pollResults": 3135029667,
    "chatOnlines": 4030849616,
    "statsURL": 1202287072,
    "chatAdminRights": 1605510357,
    "chatBannedRights": 2668758040,
    "inputWallPaper": 3861952889,
    "inputWallPaperSlug": 1913199744,
    "inputWallPaperNoFile": 2217196460,
    "account.wallPapersNotModified": 471437699,
    "account.wallPapers": 1881892265,
    "codeSettings": 3737042563,
    "wallPaperSettings": 84438264,
    "autoDownloadSettings": 3762434803,
    "account.autoDownloadSettings": 1674235686,
    "emojiKeyword": 3585325561,
    "emojiKeywordDeleted": 594408994,
    "emojiKeywordsDifference": 1556570557,
    "emojiURL": 2775937949,
    "emojiLanguage": 3019592545,
    "fileLocationToBeDeprecated": 3162490573,
    "folder": 4283715173,
    "inputFolderPeer": 4224893590,
    "folderPeer": 3921323624,
    "messages.searchCounter": 3896830975,
    "urlAuthResultRequest": 2463316494,
    "urlAuthResultAccepted": 2408320590,
    "urlAuthResultDefault": 2849430303,
    "channelLocationEmpty": 3216354699,
    "channelLocation": 547062491,
    "peerLocated": 3393592157,
    "peerSelfLocated": 4176226379,
    "restrictionReason": 3497176244,
    "inputTheme": 1012306921,
    "inputThemeSlug": 4119399921,
    "theme": 42930452,
    "account.themesNotModified": 4095653410,
    "account.themes": 2137482273,
    "auth.loginToken": 1654593920,
    "auth.loginTokenMigrateTo": 110008598,
    "auth.loginTokenSuccess": 957176926,
    "account.contentSettings": 1474462241,
    "messages.inactiveChats": 2837970629,
    "baseThemeClassic": 3282117730,
    "baseThemeDay": 4225242760,
    "baseThemeNight": 3081969320,
    "baseThemeTinted": 1834973166,
    "baseThemeArctic": 1527845466,
    "inputThemeSettings": 3176168657,
    "themeSettings": 2618595402,
    "webPageAttributeTheme": 1421174295,
    "messageUserVote": 2727236953,
    "messageUserVoteInputOption": 909603888,
    "messageUserVoteMultiple": 244310238,
    "messages.votesList": 136574537,
    "bankCardOpenUrl": 4117234314,
    "payments.bankCardData": 1042605427,
    "dialogFilter": 1949890536,
    "dialogFilterSuggested": 2004110666,
    "statsDateRangeDays": 3057118639,
    "statsAbsValueAndPrev": 3410210014,
    "statsPercentValue": 3419287520,
    "statsGraphAsync": 1244130093,
    "statsGraphError": 3202127906,
    "statsGraph": 2393138358,
    "messageInteractionCounters": 2907687357,
    "stats.broadcastStats": 3187114900,
    "help.promoDataEmpty": 2566302837,
    "help.promoData": 2352576831
  }
};

module.exports = { schema };