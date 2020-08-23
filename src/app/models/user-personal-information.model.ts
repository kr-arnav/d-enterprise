import { Name } from "./sub-models/name.model";
import { ContactDetails, GuardianDetails, AddressDetails } from "@models/sub-models/index";

export interface PersonalInformation {
    name: Name,
    dob: string,
    gender: string,
    contact: ContactDetails,
    guardian: GuardianDetails,
    presentAddress: AddressDetails,
    permanentAddress: AddressDetails
}