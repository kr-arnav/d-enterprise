import {
    PersonalInformation,
    AcademicInformation,
    ProfessionalInformation,
    BankAccountInformation
} from '@models/index';

export interface UserInformation {
    mobile: string,
    role: string
    personalInformation: PersonalInformation,
    academicInformation: AcademicInformation,
    professionalInformation: ProfessionalInformation,
    bankAccountDetails: BankAccountInformation,
    disclaimerSigned: boolean,
    termsSigned: boolean
}