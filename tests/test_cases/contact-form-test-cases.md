## Test Cases for Contact Form Submission

1. **Empty Fields Validation:**

   - Input: Submit form without filling any field.
   - Expected Result: Form submission should not be allowed and appropriate error messages should be displayed for each field.

2. **Valid Email Format:**

   - Input: Enter an invalid email format (e.g., "invalidemail.com").
   - Expected Result: Form submission should not be allowed and an error message should be displayed for the email field indicating an invalid format.

3. **Valid Input:**

   - Input: Enter valid values for all fields.
   - Expected Result: Form should be submitted successfully without any errors.

4. **Required Fields:**

   - Input: Submit form without filling the required fields (email, first name, and last name).
   - Expected Result: Form submission should not be allowed and error messages should be displayed for the required fields.

5. **Special Characters Handling:**
   - Input: Enter special characters in the fields (e.g., email: "test@example.com!", first name: "John#", last name: "Doe$").
   - Expected Result: Form submission should not be allowed and appropriate error messages should be displayed for each field.
