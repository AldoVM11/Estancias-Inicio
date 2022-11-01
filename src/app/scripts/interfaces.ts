import _ from "lodash";
declare global {
    interface Window {
        [key: string]: any;
    }
    interface Navigator {
        camera: any
        notification: any
        device: any
        splashscreen: any
    }
    var device, cordova, Media, StatusBar, Camera, CameraPopoverOptions, CameraPopoverHandle;
    var _: _;
}
// Appery.io models
export interface $aio_empty_object {};
//
export interface ProductsModel extends Array < ProductModel_0 > {}
export interface MessagesModel extends Array < MessageModel > {}
interface __ProductModel_sub_003 extends Array < string > {}
interface __ProductModel_sub_002 extends Array < string > {}
interface __ProductModel_sub_001 extends Array < string > {}
export interface ProductModel {
    "description": string,
    "originalPrice": string,
    "rating": number,
    "photos": __ProductModel_sub_001,
    "colors": __ProductModel_sub_002,
    "price": string,
    "availability": boolean,
    "name": string,
    "sizes": __ProductModel_sub_003
}
export interface SlideModel_0 {
    "text": string,
    "title": string,
    "img": string
}
export interface ProductModel_0 {
    "like": boolean,
    "img": string,
    "price": string,
    "originalPrice": string,
    "name": string
}
export interface SlidesModel_0 extends Array < SlideModel_0 > {}
export interface UserModel {
    "address": string,
    "dateOfBirth": string,
    "job": string,
    "photo": string,
    "gender": string,
    "phone": string,
    "firstName": string,
    "lastName": string,
    "email": string
}
export interface MessageModel {
    "time": string,
    "message": string,
    "title": string,
    "avatar": string,
    "name": string
}
export interface SlideModel {
    "title": string,
    "text": string,
    "img": string
}
export interface SlidesModel extends Array < SlideModel > {}
//
export interface LoginServiceResponse {
    "sessionToken": string,
    "_id": string
}
//
export interface LogoutServiceResponse {}
//
export interface SignupServiceResponse {
    "_id": string,
    "_updatedAt": string,
    "sessionToken": string,
    "username": string,
    "_createdAt": string
}
//
export interface FileReadServiceResponse {
    "data": any
}
//
interface __GetCitiesResponse_sub_001 {
    "name": string
}
export interface GetCitiesResponse extends Array < __GetCitiesResponse_sub_001 > {}