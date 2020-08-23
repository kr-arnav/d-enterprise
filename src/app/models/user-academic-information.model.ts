import { School } from "./sub-models/school.model";

export interface AcademicInformation {
    twelfth: School,
    diplomaOrGraduation: School
    postGraduation: School
    other: School
}