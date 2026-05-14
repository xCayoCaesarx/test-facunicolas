import { FormData } from '../../pages/DemoQAPages/form.page';
import path from 'path';

export const createRandomId = (): string => {
    return Math.floor(Math.random() * 1000000).toString();
}

export const createRandomUser = (): FormData => {
    const randomId = createRandomId();
    const randomIdNum = parseInt(randomId);
    
    // Constantes con tipos específicos
    const GENDERS = ['Male', 'Female', 'Other'] as const;
    const SUBJECTS = ['Maths', 'Physics', 'English', 'Chemistry', 'Biology'];
    const HOBBIES = ['Sports', 'Reading', 'Music', 'Gaming'];
    
    return {
        firstName: `TestUser${randomId}`,
        lastName: `Lastname${randomId}`,
        email: `test${randomId}@example.com`,
        gender: GENDERS[randomIdNum % 3],  // ✅ Tipo correcto
        mobile: `123456789${randomIdNum % 10}`,
        dob: `15 Jan 1990`,
        subjects: [SUBJECTS[0], SUBJECTS[1]],  // Maths y Physics
        hobbies: [HOBBIES[0]],  // Sports
        picturePath: process.env.SAMPLE_FILE_PATH || path.join(__dirname, 'sampleFile.jpeg'),
        address: `${Math.floor(Math.random() * 9999)} Main Street`,
        state: 'NCR' as const,  // ✅ Si 'state' también es tipo específico
        city: 'Delhi' as const   // ✅ Si 'city' también es tipo específico
    };
};