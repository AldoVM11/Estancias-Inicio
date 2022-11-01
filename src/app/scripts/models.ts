/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
export var models = {
    "String": {
        "type": "string"
    },
    "ProductsModel": {
        "type": "array",
        "items": [{
            "type": "ProductModel_0"
        }]
    },
    "MessagesModel": {
        "type": "array",
        "items": [{
            "type": "MessageModel"
        }]
    },
    "Boolean": {
        "type": "boolean"
    },
    "ProductModel": {
        "type": "object",
        "properties": {
            "description": {
                "type": "string"
            },
            "originalPrice": {
                "type": "string"
            },
            "rating": {
                "type": "number"
            },
            "photos": {
                "type": "array",
                "items": [{
                    "type": "string"
                }]
            },
            "colors": {
                "type": "array",
                "items": [{
                    "type": "string"
                }]
            },
            "price": {
                "type": "string"
            },
            "availability": {
                "type": "boolean"
            },
            "name": {
                "type": "string"
            },
            "sizes": {
                "type": "array",
                "items": [{
                    "type": "string"
                }]
            }
        }
    },
    "SlideModel_0": {
        "type": "object",
        "properties": {
            "text": {
                "type": "string"
            },
            "title": {
                "type": "string"
            },
            "img": {
                "type": "string"
            }
        }
    },
    "ProductModel_0": {
        "type": "object",
        "properties": {
            "like": {
                "type": "boolean"
            },
            "img": {
                "type": "string"
            },
            "price": {
                "type": "string"
            },
            "originalPrice": {
                "type": "string"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "SlidesModel_0": {
        "type": "array",
        "items": [{
            "type": "SlideModel_0"
        }]
    },
    "Number": {
        "type": "number"
    },
    "UserModel": {
        "type": "object",
        "properties": {
            "address": {
                "type": "string"
            },
            "dateOfBirth": {
                "type": "string"
            },
            "job": {
                "type": "string"
            },
            "photo": {
                "type": "string"
            },
            "gender": {
                "type": "string"
            },
            "phone": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "email": {
                "type": "string"
            }
        }
    },
    "MessageModel": {
        "type": "object",
        "properties": {
            "time": {
                "type": "string"
            },
            "message": {
                "type": "string"
            },
            "title": {
                "type": "string"
            },
            "avatar": {
                "type": "string"
            },
            "name": {
                "type": "string"
            }
        }
    },
    "SlideModel": {
        "type": "object",
        "properties": {
            "title": {
                "type": "string"
            },
            "text": {
                "type": "string"
            },
            "img": {
                "type": "string"
            }
        }
    },
    "Any": {
        "type": "any"
    },
    "Function": {
        "type": "Function"
    },
    "SlidesModel": {
        "type": "array",
        "items": [{
            "type": "SlideModel"
        }]
    },
    "Promise": {
        "type": "Promise"
    },
    "Observable": {
        "type": "Observable"
    },
    "LoginService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/login"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "username": {
                                "type": "string"
                            },
                            "password": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "sessionToken": {
                                "type": "string"
                            },
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "LogoutService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/logout"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "SignupService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/users"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "username": {
                                "type": "string"
                            },
                            "password": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            },
                            "_updatedAt": {
                                "type": "string"
                            },
                            "sessionToken": {
                                "type": "string"
                            },
                            "username": {
                                "type": "string"
                            },
                            "_createdAt": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "FileReadService": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "filePath": {
                                "type": "string"
                            },
                            "resultFormat": {
                                "type": "string",
                                "default": "FORM_DATA"
                            },
                            "fileInput": {
                                "type": "any"
                            },
                            "blobType": {
                                "type": "string"
                            },
                            "formDataFileName": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "any"
                            }
                        }
                    }
                }
            }
        }
    },
    "GetCities": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "query": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "array",
                        "items": [{
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                }
                            }
                        }]
                    }
                }
            }
        }
    }
};
/**
 * Data storage
 */
export const _aioDefStorageValues = {
    variables: {
    },
    storages: {
    }
}