(function (t) {
// cy
t.add("This value should be false.", "Dylid bod y gwerth hwn yn ffug.", "validators", "cy");
t.add("This value should be true.", "Dylid bod y gwerth hwn yn wir.", "validators", "cy");
t.add("This value should be of type {{ type }}.", "Dylid bod y gwerth hwn bod o fath {{ type }}.", "validators", "cy");
t.add("This value should be blank.", "Dylid bod y gwerth hwn yn wag.", "validators", "cy");
t.add("The value you selected is not a valid choice.", "Nid yw'r gwerth \u00e2 ddewiswyd yn ddilys.", "validators", "cy");
t.add("You must select at least {{ limit }} choice.|You must select at least {{ limit }} choices.", "Rhaid dewis o leiaf {{ limit }} opsiwn.", "validators", "cy");
t.add("You must select at most {{ limit }} choice.|You must select at most {{ limit }} choices.", "Rhaid dewis dim mwy na {{ limit }} opsiwn.", "validators", "cy");
t.add("One or more of the given values is invalid.", "Mae un neu fwy o'r gwerthoedd a roddwyd yn annilys.", "validators", "cy");
t.add("This field was not expected.", "Nid oedd disgwyl y maes hwn.", "validators", "cy");
t.add("This field is missing.", "Mae'r maes hwn ar goll.", "validators", "cy");
t.add("This value is not a valid date.", "Nid yw'r gwerth yn ddyddiad dilys.", "validators", "cy");
t.add("This value is not a valid datetime.", "Nid yw'r gwerth yn datetime dilys.", "validators", "cy");
t.add("This value is not a valid email address.", "Nid yw'r gwerth yn gyfeiriad ebost dilys.", "validators", "cy");
t.add("The file could not be found.", "Ni ddarganfyddwyd y ffeil.", "validators", "cy");
t.add("The file is not readable.", "Ni ellir darllen y ffeil.", "validators", "cy");
t.add("The file is too large ({{ size }} {{ suffix }}). Allowed maximum size is {{ limit }} {{ suffix }}.", "Mae'r ffeil yn rhy fawr ({{ size }} {{ suffix }}). Yr uchafswm \u00e2 ganiateir yw {{ limit }} {{ suffix }}.", "validators", "cy");
t.add("The mime type of the file is invalid ({{ type }}). Allowed mime types are {{ types }}.", "Nid yw math mime y ffeil yn ddilys ({{ type }}). Dyma'r mathau \u00e2 ganiateir {{ types }}.", "validators", "cy");
t.add("This value should be {{ limit }} or less.", "Dylai'r gwerth hwn fod yn {{ limit }} neu lai.", "validators", "cy");
t.add("This value is too long. It should have {{ limit }} character or less.|This value is too long. It should have {{ limit }} characters or less.", "Mae'r gwerth hwn rhy hir. Dylai gynnwys {{ limit }} nodyn cyfrifiadurol neu lai.", "validators", "cy");
t.add("This value should be {{ limit }} or more.", "Dylai'r gwerth hwn fod yn {{ limit }} neu fwy.", "validators", "cy");
t.add("This value is too short. It should have {{ limit }} character or more.|This value is too short. It should have {{ limit }} characters or more.", "Mae'r gwerth hwn yn rhy fyr. Dylai gynnwys {{ limit }} nodyn cyfrifiadurol neu fwy.", "validators", "cy");
t.add("This value should not be blank.", "Ni ddylai'r gwerth hwn fod yn wag.", "validators", "cy");
t.add("This value should not be null.", "Ni ddylai'r gwerth hwn fod yn null.", "validators", "cy");
t.add("This value should be null.", "Dylai'r gwerth fod yn null.", "validators", "cy");
t.add("This value is not valid.", "Nid yw'r gwerth hwn yn ddilys.", "validators", "cy");
t.add("This value is not a valid time.", "Nid yw'r gwerth hwn yn amser dilys.", "validators", "cy");
t.add("This value is not a valid URL.", "Nid yw'r gwerth hwn yn URL dilys.", "validators", "cy");
t.add("The two values should be equal.", "Rhaid i'r ddau werth fod yn gyfystyr a'u gilydd.", "validators", "cy");
t.add("The file is too large. Allowed maximum size is {{ limit }} {{ suffix }}.", "Mae'r ffeil yn rhy fawr. Yr uchafswm \u00e2 ganiateir yw {{ limit }} {{ suffix }}.", "validators", "cy");
t.add("The file is too large.", "Mae'r ffeil yn rhy fawr.", "validators", "cy");
t.add("The file could not be uploaded.", "Methwyd ag uwchlwytho'r ffeil.", "validators", "cy");
t.add("This value should be a valid number.", "Dylai'r gwerth hwn fod yn rif dilys.", "validators", "cy");
t.add("This file is not a valid image.", "Nid yw'r ffeil hon yn ddelwedd dilys.", "validators", "cy");
t.add("This is not a valid IP address.", "Nid yw'r gwerth hwn yn gyfeiriad IP dilys.", "validators", "cy");
t.add("This value is not a valid language.", "Nid yw'r gwerth hwn yn iaith ddilys.", "validators", "cy");
t.add("This value is not a valid locale.", "Nid yw'r gwerth hwn yn locale dilys.", "validators", "cy");
t.add("This value is not a valid country.", "Nid yw'r gwerth hwn yn wlad dilys.", "validators", "cy");
t.add("This value is already used.", "Mae'r gwerth hwn eisoes yn cael ei ddefnyddio.", "validators", "cy");
t.add("The size of the image could not be detected.", "Methwyd \u00e2 darganfod maint y ddelwedd.", "validators", "cy");
t.add("The image width is too big ({{ width }}px). Allowed maximum width is {{ max_width }}px.", "Mae lled y ddelwedd yn rhy fawr ({{ width }}px). Y lled mwyaf \u00e2 ganiateir yw {{ max_width }}px.", "validators", "cy");
t.add("The image width is too small ({{ width }}px). Minimum width expected is {{ min_width }}px.", "Mae lled y ddelwedd yn rhy fach ({{ width }}px). Y lled lleiaf \u00e2 ganiateir yw {{ min_width }}px.", "validators", "cy");
t.add("The image height is too big ({{ height }}px). Allowed maximum height is {{ max_height }}px.", "Mae uchder y ddelwedd yn rhy fawr ({{ width }}px). Yr uchder mwyaf \u00e2 ganiateir yw {{ max_height }}px.", "validators", "cy");
t.add("The image height is too small ({{ height }}px). Minimum height expected is {{ min_height }}px.", "Mae uchder y ddelwedd yn rhy fach ({{ width }}px). Yr uchder lleiaf \u00e2 ganiateir yw {{ min_height }}px.", "validators", "cy");
t.add("This value should be the user's current password.", "Dylaid bod y gwerth hwn yn gyfrinair presenol y defnyddiwr.", "validators", "cy");
t.add("This value should have exactly {{ limit }} character.|This value should have exactly {{ limit }} characters.", "Dylai'r gwerth hwn fod yn union {{ limit }} nodyn cyfrifiadurol o hyd.", "validators", "cy");
t.add("The file was only partially uploaded.", "Dim ond rhan o'r ffeil ag uwchlwythwyd.", "validators", "cy");
t.add("No file was uploaded.", "Ni uwchlwythwyd unrhyw ffeil.", "validators", "cy");
t.add("No temporary folder was configured in php.ini.", "Nid oedd ffolder dros dro wedi'i ffurfweddu yn php.ini, neu nid yw'r ffolder a ffurfweddiwyd yn bodoli.", "validators", "cy");
t.add("Cannot write temporary file to disk.", "Methwyd ag ysgrifennu'r ffeil dros-dro ar ddisg.", "validators", "cy");
t.add("A PHP extension caused the upload to fail.", "Methwyd ag uwchlwytho oherwydd ategyn PHP.", "validators", "cy");
t.add("This collection should contain {{ limit }} element or more.|This collection should contain {{ limit }} elements or more.", "Dylai'r casgliad hwn gynnwys {{ limit }} elfen neu fwy.", "validators", "cy");
t.add("This collection should contain {{ limit }} element or less.|This collection should contain {{ limit }} elements or less.", "Dylai'r casgliad hwn gynnwys {{ limit }} elfen neu lai.", "validators", "cy");
t.add("This collection should contain exactly {{ limit }} element.|This collection should contain exactly {{ limit }} elements.", "Dylai'r casgliad hwn gynnwys union {{ limit }} elfen.", "validators", "cy");
t.add("Invalid card number.", "Nid oedd rhif y cerdyn yn ddilys.", "validators", "cy");
t.add("Unsupported card type or invalid card number.", "Unai ni dderbynir y math yna o gerdyn, neu nid yw rhif y cerdyn yn ddilys.", "validators", "cy");
t.add("This is not a valid International Bank Account Number (IBAN).", "Nid yw'r gwerth hwn yn Rhif Cyfrif Banc Rhyngwladol (IBAN) dilys.", "validators", "cy");
t.add("This value is not a valid ISBN-10.", "Nid yw'r gwerth hwn yn ISBN-10 dilys.", "validators", "cy");
t.add("This value is not a valid ISBN-13.", "Nid yw'r gwerth hwn yn ISBN-13 dilys.", "validators", "cy");
t.add("This value is neither a valid ISBN-10 nor a valid ISBN-13.", "Nid yw'r gwerth hwn yn Rhif ISBN-10 dilys nac yn ISBN-13 dilys.", "validators", "cy");
t.add("This value is not a valid ISSN.", "Nid yw'r gwerth hwn yn ISSN dilys.", "validators", "cy");
t.add("This value is not a valid currency.", "Nid yw'r gwerth hwn yn arian dilys.", "validators", "cy");
t.add("This value should be equal to {{ compared_value }}.", "Dylai'r gwerth hwn fod yn gyfartal \u00e2 {{ compared_value }}.", "validators", "cy");
t.add("This value should be greater than {{ compared_value }}.", "Dylai'r gwerth hwn fod yn fwy na {{ compared_value }}.", "validators", "cy");
t.add("This value should be greater than or equal to {{ compared_value }}.", "Dylai'r gwerth hwn fod yn fwy na neu'n hafal i {{ compared_value }}.", "validators", "cy");
t.add("This value should be identical to {{ compared_value_type }} {{ compared_value }}.", "Dylai'r gwerth hwn fod yn union yr un fath \u00e2 {{ compared_value_type }} {{ compared_value }}.", "validators", "cy");
t.add("This value should be less than {{ compared_value }}.", "Dylai'r gwerth hwn fod yn llai na {{ compared_value }}.", "validators", "cy");
t.add("This value should be less than or equal to {{ compared_value }}.", "Dylai'r gwerth hwn fod yn llai na neu'n hafal i {{ compared_value }}.", "validators", "cy");
t.add("This value should not be equal to {{ compared_value }}.", "Ni ddylai'r gwerth hwn fod yn hafal i {{ compared_value }}.", "validators", "cy");
t.add("This value should not be identical to {{ compared_value_type }} {{ compared_value }}.", "Ni ddylai'r gwerth hwn fod yn union yr un fath \u00e2 {{ compared_value_type }} {{ compared_value }}.", "validators", "cy");
t.add("The image ratio is too big ({{ ratio }}). Allowed maximum ratio is {{ max_ratio }}.", "Mae'r gymhareb delwedd yn rhy fawr ({{ ratio }}). Y gymhareb uchaf a ganiateir yw {{ max_ratio }}.", "validators", "cy");
t.add("The image ratio is too small ({{ ratio }}). Minimum ratio expected is {{ min_ratio }}.", "Mae'r gymhareb delwedd yn rhy fach ({{ ratio }}). Y gymhareb isaf a ddisgwylir yw {{ min_ratio }}.", "validators", "cy");
t.add("The image is square ({{ width }}x{{ height }}px). Square images are not allowed.", "Mae'r ddelwedd yn sgw\u00e2r ({{ width }}x{{ height }}px). Ni chaniateir delweddau sgw\u00e2r.", "validators", "cy");
t.add("The image is landscape oriented ({{ width }}x{{ height }}px). Landscape oriented images are not allowed.", "Mae'r ddelwedd mewn fformat tirlun ({{ width }}x{{ height }}px). Ni chaniateir delweddau mewn fformat tirlun.", "validators", "cy");
t.add("The image is portrait oriented ({{ width }}x{{ height }}px). Portrait oriented images are not allowed.", "Mae'r ddelwedd mewn fformat portread ({{ width }}x{{ height }}px). Ni chaniateir delweddau mewn fformat portread.", "validators", "cy");
t.add("An empty file is not allowed.", "Ni chaniateir ffeil wag.", "validators", "cy");
t.add("The host could not be resolved.", "Ni fu modd datrys y gwesteiwr.", "validators", "cy");
t.add("This value does not match the expected {{ charset }} charset.", "Nid yw'r gwerth hwn yn cyfateb \u00e2'r {{ charset }} set nodau ddisgwyliedig.", "validators", "cy");
t.add("This is not a valid Business Identifier Code (BIC).", "Nid yw'r gwerth hwn yn God Adnabod Busnes (BIC) dilys.", "validators", "cy");
t.add("Error", "Gwall", "validators", "cy");
t.add("This is not a valid UUID.", "Nid yw'r gwerth hwn yn UUID dilys.", "validators", "cy");
t.add("This value should be a multiple of {{ compared_value }}.", "Dylai'r gwerth hwn fod yn luosrif o {{ compared_value }}.", "validators", "cy");
t.add("This Business Identifier Code (BIC) is not associated with IBAN {{ iban }}.", "Nid yw'r Cod Adnabod Busnes (BIC) hwn yn gysylltiedig ag IBAN {{ iban }}.", "validators", "cy");
t.add("This value should be valid JSON.", "Dylai'r gwerth hwn fod yn JSON dilys.", "validators", "cy");
t.add("This collection should contain only unique elements.", "Dylai'r casgliad hwn gynnwys elfennau unigryw yn unig.", "validators", "cy");
t.add("This value should be positive.", "Dylai'r gwerth hwn fod yn gadarnhaol.", "validators", "cy");
t.add("This value should be either positive or zero.", "Dylai'r gwerth hwn fod yn gadarnhaol neu sero.", "validators", "cy");
t.add("This value should be negative.", "Dylai'r gwerth hwn fod yn negyddol.", "validators", "cy");
t.add("This value should be either negative or zero.", "Dylai'r gwerth hwn fod yn negyddol neu sero.", "validators", "cy");
t.add("This value is not a valid timezone.", "Nid yw'r gwerth hwn yn gyfnod parth amser dilys.", "validators", "cy");
t.add("This password has been leaked in a data breach, it must not be used. Please use another password.", "Mae'r cyfrinair hwn wedi'i ddatgelu mewn toriad data, ni ddylid ei ddefnyddio. Defnyddiwch gyfrinair arall.", "validators", "cy");
t.add("This value should be between {{ min }} and {{ max }}.", "Dylai'r gwerth hwn fod rhwng {{ min }} a {{ max }}.", "validators", "cy");
t.add("This value is not a valid hostname.", "Nid yw'r gwerth hwn yn enw gwesteiwr dilys.", "validators", "cy");
t.add("The number of elements in this collection should be a multiple of {{ compared_value }}.", "Dylai nifer yr elfennau yn y casgliad hwn fod yn luosrif o {{ compared_value }}.", "validators", "cy");
t.add("This value should satisfy at least one of the following constraints:", "Dylai'r gwerth hwn fodloni o leiaf un o'r cyfyngiadau canlynol:", "validators", "cy");
t.add("Each element of this collection should satisfy its own set of constraints.", "Dylai pob elfen o'r casgliad hwn fodloni ei gyfres ei hun o gyfyngiadau.", "validators", "cy");
t.add("This value is not a valid International Securities Identification Number (ISIN).", "Nid yw'r gwerth hwn yn Rhif Adnabod Diogelwch Rhyngwladol (ISIN) dilys.", "validators", "cy");
t.add("This value should be a valid expression.", "Dylai'r gwerth hwn fod yn fynegiant dilys.", "validators", "cy");
t.add("This value is not a valid CSS color.", "Nid yw'r gwerth hwn yn lliw CSS dilys.", "validators", "cy");
t.add("This value is not a valid CIDR notation.", "Nid yw'r gwerth hwn yn nodiant CIDR dilys.", "validators", "cy");
t.add("The value of the netmask should be between {{ min }} and {{ max }}.", "Dylai gwerth y mwgwd rhwydwaith fod rhwng {{ min }} a {{ max }}.", "validators", "cy");
t.add("The filename is too long. It should have {{ filename_max_length }} character or less.|The filename is too long. It should have {{ filename_max_length }} characters or less.", "Mae'r enw ffeil yn rhy hir. Dylai fod \u00e2 {{ filename_max_length }} cymeriad neu lai.|Mae'r enw ffeil yn rhy hir. Dylai fod \u00e2 {{ filename_max_length }} nodau neu lai.", "validators", "cy");
t.add("The password strength is too low. Please use a stronger password.", "Mae cryfder y cyfrinair yn rhy isel. Defnyddiwch gyfrinair cryfach os gwelwch yn dda.", "validators", "cy");
t.add("This value contains characters that are not allowed by the current restriction-level.", "Mae'r gwerth hwn yn cynnwys cymeriadau nad ydynt yn cael eu caniat\u00e1u gan y lefel cyfyngu presennol.", "validators", "cy");
t.add("Using invisible characters is not allowed.", "Ni chaniateir defnyddio cymeriadau anweledig.", "validators", "cy");
t.add("Mixing numbers from different scripts is not allowed.", "Ni chaniateir cymysgu rhifau o sgriptiau gwahanol.", "validators", "cy");
t.add("Using hidden overlay characters is not allowed.", "Ni chaniateir defnyddio cymeriadau goruwchlwytho cudd.", "validators", "cy");
t.add("The extension of the file is invalid ({{ extension }}). Allowed extensions are {{ extensions }}.", "Mae estyniad y ffeil yn annilys ({{ extension }}). Mae'r estyniadau a ganiateir yn {{ extensions }}.", "validators", "cy");
t.add("The detected character encoding is invalid ({{ detected }}). Allowed encodings are {{ encodings }}.", "Mae'r codio cymeriadau a ganfuwyd yn annilys ({{ detected }}). Mae'r codiadau a ganiateir yn {{ encodings }}.", "validators", "cy");
t.add("This value is not a valid MAC address.", "Nid yw'r gwerth hwn yn gyfeiriad MAC dilys.", "validators", "cy");
t.add("This URL is missing a top-level domain.", "Mae'r URL hwn yn colli parth lefel uchaf.", "validators", "cy");
t.add("This form should not contain extra fields.", "Ni ddylai'r ffurflen gynnwys meysydd ychwanegol.", "validators", "cy");
t.add("The uploaded file was too large. Please try to upload a smaller file.", "Roedd y ffeil a uwchlwythwyd yn rhy fawr. Ceisiwch uwchlwytho ffeil llai.", "validators", "cy");
t.add("The CSRF token is invalid. Please try to resubmit the form.", "Mae'r tocyn CSRF yn annilys. Ceisiwch ailgyflwyno'r ffurflen.", "validators", "cy");
t.add("This value is not a valid HTML5 color.", "Nid yw'r gwerth hwn yn lliw HTML5 dilys.", "validators", "cy");
t.add("Please enter a valid birthdate.", "Nodwch ddyddiad geni dilys.", "validators", "cy");
t.add("The selected choice is invalid.", "Mae'r dewis a ddewiswyd yn annilys.", "validators", "cy");
t.add("The collection is invalid.", "Mae'r casgliad yn annilys.", "validators", "cy");
t.add("Please select a valid color.", "Dewiswch liw dilys.", "validators", "cy");
t.add("Please select a valid country.", "Dewiswch wlad ddilys.", "validators", "cy");
t.add("Please select a valid currency.", "Dewiswch arian cyfred dilys.", "validators", "cy");
t.add("Please choose a valid date interval.", "Dewiswch ystod dyddiadau dilys.", "validators", "cy");
t.add("Please enter a valid date and time.", "Nodwch ddyddiad ac amser dilys.", "validators", "cy");
t.add("Please enter a valid date.", "Nodwch ddyddiad dilys.", "validators", "cy");
t.add("Please select a valid file.", "Dewiswch ffeil ddilys.", "validators", "cy");
t.add("The hidden field is invalid.", "Mae'r maes cudd yn annilys.", "validators", "cy");
t.add("Please enter an integer.", "Nodwch rif cyfan.", "validators", "cy");
t.add("Please select a valid language.", "Dewiswch iaith ddilys.", "validators", "cy");
t.add("Please select a valid locale.", "Dewiswch leoliad dilys.", "validators", "cy");
t.add("Please enter a valid money amount.", "Nodwch swm arian dilys.", "validators", "cy");
t.add("Please enter a number.", "Nodwch rif.", "validators", "cy");
t.add("The password is invalid.", "Mae'r cyfrinair yn annilys.", "validators", "cy");
t.add("Please enter a percentage value.", "Nodwch werth canran.", "validators", "cy");
t.add("The values do not match.", "Nid yw'r gwerthoedd yn cyfateb.", "validators", "cy");
t.add("Please enter a valid time.", "Nodwch amser dilys.", "validators", "cy");
t.add("Please select a valid timezone.", "Dewiswch barth amser dilys.", "validators", "cy");
t.add("Please enter a valid URL.", "Nodwch URL dilys.", "validators", "cy");
t.add("Please enter a valid search term.", "Nodwch derm chwilio dilys.", "validators", "cy");
t.add("Please provide a valid phone number.", "Darparwch rif ff\u00f4n dilys.", "validators", "cy");
t.add("The checkbox has an invalid value.", "Mae gan y blwch ticio werth annilys.", "validators", "cy");
t.add("Please enter a valid email address.", "Nodwch gyfeiriad e-bost dilys.", "validators", "cy");
t.add("Please select a valid option.", "Dewiswch opsiwn dilys.", "validators", "cy");
t.add("Please select a valid range.", "Dewiswch ystod ddilys.", "validators", "cy");
t.add("Please enter a valid week.", "Nodwch wythnos ddilys.", "validators", "cy");
})(Translator);
