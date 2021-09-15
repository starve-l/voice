enum German {
    COMMANDS_DEPLOY_SUCCESS = "Befehle erfolgreich bereitgestellt.",

    COMMANDS_PLAY_BUSY = "🕐",
    COMMANDS_PLAY_FOLLOWUP_START = "Jetzt an der Reihe!",
    COMMANDS_PLAY_FOLLOWUP_END = "Jetzt fertig!",
    COMMANDS_PLAY_FOLLOWUP_ERROR = "Error: ",
    COMMANDS_PLAY_DONE = "Zur Warteschlange hinzugefügt: ",
    COMMANDS_PLAY_ERROR = "Es gab einen Fehler bei der Wiedergabe. Bitte versuche es später erneut!",

    COMMANDS_SKIP_SUCCESS = "Song übersprungen!",
    COMMANDS_SKIP_NOSUBSCRIPTION = "Not playing in this server!",

    COMMANDS_QUEUE_EMPTY = "Die Warteschlange ist leer!",
    COMMANDS_QUEUE_PLAYING = "Jetzt: ",
    COMMANDS_QUEUE_NOSUBSCRIPTION = "Not playing in this server!",

    COMMANDS_PAUSE_SUCCESS = "Pausiert!",
    COMMANDS_PAUSE_NOSUBSCRIPTION = "Not playing in this server!",

    COMMANDS_RESUME_SUCCESS = "Gestartet!",
    COMMANDS_RESUME_NOSUBSCRIPTION = "Not playing in this server!",

    COMMANDS_LEAVE_SUCCESS = "Channel verlassen!",
    COMMANDS_LEAVE_NOSUBSCRIPTION = "Not playing in this server!",

    ERRORS_INTERACTION_UNKNOWN = "Unbekannter Befehl!",
    ERRORS_SUBSCRIPTION_NONE = "Tritt einem Voice-Channel bei und versuche das erneut!",
    ERRORS_SUBSCRIPTION_TIMEOUT = "Versuch, eine Verbindung innerhalb von 20 Sekunden fehlgeschlagen, bitte versuche es später erneut!",

}

export default German;