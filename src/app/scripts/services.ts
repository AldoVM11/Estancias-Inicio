import {
    ExportedClass as SignupService
} from './services/SignupService';
import {
    ExportedClass as LogoutService
} from './services/LogoutService';
import {
    ExportedClass as LoginService
} from './services/LoginService';
import {
    ExportedClass as FileReadService
} from './custom/FileReadService_Impl';
import {
    ExportedClass as GetCities
} from './custom/GetCities_Impl';
import {
    ExportedClass as FormUtils
} from './custom/FormUtils';
export const services = {
    SignupService,
    LogoutService,
    LoginService,
    FormUtils,
    FileReadService,
    GetCities,
};