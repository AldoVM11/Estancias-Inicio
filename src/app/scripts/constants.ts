export const constants = {
    /**
     * Settings
     */
    Settings: {},
    /**
     * SecuritySettings
     * @property database_id       - 
     */
    SecuritySettings: {
        "database_id": "SPECIFY YOUR DATABASE ID"
    }
};
export const routes = {
    "Main_Login": "main_login",
    "Register_Normal": "register_normal",
    "Register_Services": "register_services",
    "Register_Services_2": "register_services_2",
    "Register_Select": "register_select",
    "Login": "login",
};
export const pushSettings = {
    appID: 'c111ae79-11b6-42b0-888a-d3c6afe45e75',
    baseUrl: 'https://api.appery.io/rest/push/reg',
    baseSendUrl: 'https://api.appery.io/rest/push/msg',
    initOptions: {}
};
export const projectInfo = {
    guid: 'c111ae79-11b6-42b0-888a-d3c6afe45e75',
    name: 'Estancias',
    description: ''
};
export const IGNORED_VALUE = Symbol.for("AIO_REST_IGNORED_VALUE");