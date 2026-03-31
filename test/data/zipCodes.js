const FIRST_NAME = 'Andrii';
const LAST_NAME = 'Suvala';
const ZIP_CODE = '79059';

export default [
    { firstName: '', lastName: LAST_NAME, zip: ZIP_CODE, error: 'Error: First Name is required' },
    { firstName: FIRST_NAME, lastName: '', zip: ZIP_CODE, error: 'Error: Last Name is required' },
    { firstName: FIRST_NAME, lastName: LAST_NAME, zip: '', error: 'Error: Postal Code is required' },
];