/**
 * Tanzania NIDA Application - Google Form Generator
 * 
 * HOW TO USE:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this entire script
 * 4. Click Run > createNIDAForm
 * 5. Authorize the script when prompted
 * 6. The form link will appear in the Execution Log
 */

function createNIDAForm() {
  var form = FormApp.create("Tanzania NIDA - National ID Application Form");

  form.setDescription(
    "Maombi ya Kitambulisho cha Taifa - National Identification Authority (NIDA) Tanzania\n" +
    "Fill in all required fields accurately. Jaza sehemu zote kwa usahihi.\n" +
    "Official Portal: https://eonline.nida.go.tz"
  );

  form.setConfirmationMessage(
    "Asante! Your application has been submitted successfully. " +
    "Please visit the nearest NIDA District Office with your printed form and supporting documents to complete biometric registration."
  );

  form.setAllowResponseEdits(false);
  form.setCollectEmail(true);

  // ─────────────────────────────────────────────
  // SECTION 1: ACCOUNT / LOGIN CREDENTIALS
  // ─────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle("SEHEMU 1: Taarifa za Akaunti / Account Credentials")
    .setHelpText("Provide your NIDA online portal account details.");

  form.addTextItem()
    .setTitle("Email Address / Barua Pepe *")
    .setHelpText("Enter a valid email address used to register on eonline.nida.go.tz")
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Citizenship Type / Aina ya Uraia *")
    .setChoiceValues(["Citizen / Raia", "Legal Resident / Mkazi wa Kisheria", "Refugee / Mkimbizi"])
    .setRequired(true);

  // ─────────────────────────────────────────────
  // SECTION 2: PERSONAL INFORMATION
  // ─────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle("SEHEMU 2: Taarifa Binafsi / Personal Information")
    .setHelpText("Enter your personal details exactly as they appear on your birth certificate.");

  form.addTextItem()
    .setTitle("First Name / Jina la Kwanza *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Middle Name / Jina la Kati")
    .setRequired(false);

  form.addTextItem()
    .setTitle("Last Name / Jina la Mwisho *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Date of Birth / Tarehe ya Kuzaliwa *")
    .setHelpText("Format: DD/MM/YYYY")
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Gender / Jinsia *")
    .setChoiceValues(["Male / Mme", "Female / Mke"])
    .setRequired(true);

  form.addTextItem()
    .setTitle("Place of Birth / Mahali pa Kuzaliwa *")
    .setHelpText("Village, Ward, District, Region")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Region of Birth / Mkoa wa Kuzaliwa *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("District of Birth / Wilaya ya Kuzaliwa *")
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Marital Status / Hali ya Ndoa *")
    .setChoiceValues(["Single / Mseja", "Married / Mwenye Ndoa", "Divorced / Talaka", "Widowed / Mjane"])
    .setRequired(true);

  form.addTextItem()
    .setTitle("Nationality / Utaifa *")
    .setHelpText("e.g. Tanzanian")
    .setRequired(true);

  // ─────────────────────────────────────────────
  // SECTION 3: CONTACT INFORMATION
  // ─────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle("SEHEMU 3: Mawasiliano / Contact Information");

  form.addTextItem()
    .setTitle("Mobile Phone Number / Namba ya Simu ya Mkononi *")
    .setHelpText("e.g. 0712345678 or +255712345678")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Alternative Phone Number / Namba Mbadala ya Simu")
    .setRequired(false);

  form.addTextItem()
    .setTitle("Current Region of Residence / Mkoa wa Makazi *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Current District / Wilaya ya Makazi *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Ward / Kata *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Village / Street / Kijiji au Mtaa *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("House Number / Namba ya Nyumba")
    .setRequired(false);

  // ─────────────────────────────────────────────
  // SECTION 4: PARENTS / GUARDIAN INFORMATION
  // ─────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle("SEHEMU 4: Taarifa za Wazazi / Parents or Guardian Information");

  form.addTextItem()
    .setTitle("Father's Full Name / Jina Kamili la Baba *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Father's NIN (NIDA Number) / Namba ya NIDA ya Baba")
    .setHelpText("If available / Kama ipo")
    .setRequired(false);

  form.addTextItem()
    .setTitle("Mother's Full Name / Jina Kamili la Mama *")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Mother's NIN (NIDA Number) / Namba ya NIDA ya Mama")
    .setHelpText("If available / Kama ipo")
    .setRequired(false);

  // ─────────────────────────────────────────────
  // SECTION 5: CITIZENSHIP BASIS
  // ─────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle("SEHEMU 5: Msingi wa Uraia / Basis of Citizenship")
    .setHelpText("For Citizens only. Legal Residents skip to Section 6.");

  form.addMultipleChoiceItem()
    .setTitle("Citizenship Basis / Msingi wa Uraia")
    .setChoiceValues([
      "By Birth / Kwa Kuzaliwa",
      "By Descent / Kwa Ukoo",
      "By Registration / Kwa Usajili",
      "By Naturalization / Kwa Uasili"
    ])
    .setRequired(false);

  form.addTextItem()
    .setTitle("Birth Certificate Number / Namba ya Cheti cha Kuzaliwa")
    .setRequired(false);

  form.addTextItem()
    .setTitle("Naturalization Certificate / Dossier Number (if applicable)")
    .setHelpText("Only for citizenship by naturalization")
    .setRequired(false);

  // ─────────────────────────────────────────────
  // SECTION 6: LEGAL RESIDENTS ONLY
  // ─────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle("SEHEMU 6: Wakazi wa Kisheria / Legal Residents Only")
    .setHelpText("Skip this section if you are a Tanzanian citizen.");

  form.addTextItem()
    .setTitle("Passport Number / Namba ya Pasipoti")
    .setRequired(false);

  form.addTextItem()
    .setTitle("Resident Permit / Work Permit Number")
    .setRequired(false);

  form.addTextItem()
    .setTitle("Permit Expiry Date / Tarehe ya Kumalizika kwa Kibali")
    .setHelpText("Format: DD/MM/YYYY")
    .setRequired(false);

  // ─────────────────────────────────────────────
  // SECTION 7: SUPPORTING DOCUMENTS CHECKLIST
  // ─────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle("SEHEMU 7: Orodha ya Nyaraka / Supporting Documents Checklist")
    .setHelpText("Confirm which documents you have prepared (PDF or JPG/PNG, max 1 page each).");

  form.addCheckboxItem()
    .setTitle("Documents Prepared / Nyaraka Zilizoandaliwa *")
    .setChoiceValues([
      "Applicant's Birth Certificate / Cheti cha Kuzaliwa cha Mwombaji",
      "Parent's Birth Certificate / Cheti cha Kuzaliwa cha Mzazi",
      "Parent's National ID / Kitambulisho cha Mzazi",
      "Naturalization Certificate (if applicable)",
      "Valid Passport (Legal Residents)",
      "Resident / Work Permit (Legal Residents)"
    ])
    .setRequired(true);

  // ─────────────────────────────────────────────
  // SECTION 8: DECLARATION
  // ─────────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle("SEHEMU 8: Tamko / Declaration");

  form.addMultipleChoiceItem()
    .setTitle("Declaration / Tamko *")
    .setChoiceValues([
      "I confirm that all information provided is true and accurate to the best of my knowledge. / Nathibitisha kwamba taarifa zote nilizotoa ni za kweli na sahihi."
    ])
    .setRequired(true);

  // ─────────────────────────────────────────────
  // OUTPUT FORM URL
  // ─────────────────────────────────────────────
  var formUrl = form.getPublishedUrl();
  var editUrl = form.getEditUrl();

  Logger.log("✅ NIDA Form Created Successfully!");
  Logger.log("📋 Form URL (Share with applicants): " + formUrl);
  Logger.log("✏️  Edit URL (Admin): " + editUrl);

  // Optional: show a popup in the script editor
  var ui = SpreadsheetApp.getUi ? SpreadsheetApp.getUi() : null;
  if (ui) {
    ui.alert("Form Created!\n\nShare URL:\n" + formUrl);
  }
}
