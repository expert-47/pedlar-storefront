import React from "react";
import { styles } from "./style";
import { CustomContainer } from "StoreComponents/landinglayout";
import { Grid, Typography, Box } from "@mui/material";
import Creatorterms from "../creatorterms.json";

const CreatorTerms = () => {
  return (
    <CustomContainer>
      <Box sx={styles.MainBox}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography textTransform={"none"} fontSize={"48px"}>
            Creator Terms and Conditions
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            {
              "You agree that by using the Pedlar Platform and/or by pressing ‘Yes’/’I accept/Submit‘, these Terms and Conditions will be the Agreement governing the relationship between you and Pedlar and you agree to be bound by these Terms and Conditions."
            }
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
            1. Definitions and Interpretation
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
            1.1 Definitions
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            The following terms in these Terms and Conditions have the meanings set out below, unless otherwise
            indicated:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (1) <b>Agreement</b> means the agreement comprising:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (a) these Terms and Conditions
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (2) <b>Confidential Information</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            means all information disclosed (including inadvertently) by a party (Discloser) in connection
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            with the Agreement, all information disclosed by a third party that the Discloser is required to keep
            confidential, including (without limitation):
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (a)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            information which, either orally or in writing, is designated or indicated as being the proprietary or
            confidential
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            information of the Discloser or a third party to whom the Discloser owes an obligation of confidentiality;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (b)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Information derived partly or wholly from the information, including (without limitation) any calculation,
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            conclusion, summary, computer modelling; and
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (3) <b>Force Majeure Event</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            means any of the following causes provided that they are outside the reasonable control of the affected
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            party and could not have been prevented or avoided by that party taking all reasonable steps:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (a)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            act of God, earthquake, cyclone, fire, explosion, flood, landslide, lightning, storm, tempest, drought or
            meteor;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (b)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            war (declared or undeclared), invasion, act of a foreign enemy, hostilities between nations, civil
            insurrection or militarily usurped power;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (c)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            act of public enemy, sabotage or malicious damage, terrorism or civil unrest;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (d)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            ionising radiation or contamination by radioactivity from any nuclear waste or from combustion of nuclear
            fuel;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (e)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            confiscation, nationalisation, requisition, expropriation, prohibition, embargo, restraint or damage to
            property by or
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            under the order of any government or government authority (except where such arises out of a failure by a
            party to comply with any Law);
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (f) health crisis or pandemic or any nature; or
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (g)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            strikes, blockades, lock out or other industrial disputes other than an industrial dispute that only
            involves the party’s personnel.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (4) <b>GST</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            means Goods and Services Tax as defined in the A New Tax System (Goods and Services Tax) Act 1999 (Cth);
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (5) <b>Information</b> has the meaning given to that term in cl 8.1;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (6) <b>Instagram</b> means the Instagram application;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (7) <b>IPR</b> or <b> Intellectual Property Rights</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            means all patents, rights to inventions, utility models, copyright and related rights, trade marks,
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            service marks, trade, business and domain names, rights in trade dress or get-up, rights in goodwill or to
            sue for passing off, unfair competition rights, design rights, rights in computer software, database rights,
            topography rights, rights in confidential information (including know-how and trade secrets) and any other
            intellectual property rights of any kind whether registrable or not in any country, including any renewals
            or extensions thereof;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (8) <b>Jurisdiction</b> means any of the following:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (a)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            the State of New South Wales and the Commonwealth of Australia – if your residential address is anywhere
            else in the world.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (9) <b>Law</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            means any applicable statute, regulation, by-law, ordinance or subordinate legislation in force from time to
            time
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            in the Jurisdiction applicable to the Agreement;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (10) <b>Materials</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            means material in any form, including drawings, reports, specifications, images, photos, videos and media
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            in Graphics Interchange Format and other proprietary media types (howsoever constituted) and other documents
            provided by you in connection with the Agreement;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (11) <b>Payment</b> has the meaning given to that term in clause 5.1;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (12) <b>Pedlar Store</b> means any storefront on the Pedlar Platform;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (13) <b>Privacy Policy</b> means Pedlar’s Privacy Policy available at
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <a href="http://pedlar.store/ ">http://pedlar.store/</a> privacy policy;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (14) <b>Schedule</b> means the Schedule to this document;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (15) <b>Taxes</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            means GST, VAT or any sales tax that may apply in the Jurisdiction to the provision of the Agreement;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (16) <b>Terms and Conditions</b>means this document;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>1.2 Interpretation</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            In the Agreement:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (1) reference to:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (a) one gender includes the others;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (b) the singular includes the plural and the plural includes the singular;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (c) a person includes a body corporate;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (d)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            a party includes the party’s executors, administrators, successors and permitted assigns;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (e) a thing includes the whole and each part of it separately;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (f)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            a statute, regulation, code or other law or a provision of any of them includes:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (i) any amendment or replacement of it; and
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (ii)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            another regulation or other statutory instrument made under it, or made under it as amended or replaced; and
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (g)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            dollars means Australian dollars unless otherwise stated in the Quote.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (2) “Including” and similar expressions are not words of limitation.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (3)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Where a word or expression is given a particular meaning, other parts of speech and grammatical forms of
            that word
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            or expression have a corresponding meaning.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (4)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Headings and any table of contents or index are for convenience only and do not form part of this Agreement
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            or affect its interpretation.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (5)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            A provision of this Agreement must not be construed to the disadvantage of a party merely because that party
            was
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            responsible for the preparation of the Agreement or the inclusion of the provision in the Agreement.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>2. Application of these Terms and Conditions</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (1)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            These Terms and Conditions apply to any Pedlar Store for the provision of services offered by Pedlar to you
            through
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            through the Pedlar Platform.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (2)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Pedlar may, at any time, and at its sole discretion, modify these Terms and Conditions.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (3)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            If you use the Pedlar Platform, will provide notice to you of these modifications
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (4)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Your use of the Pedlar Platform following any modification to the Terms and Conditions will be subject to
            the most current
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            current version of the Terms and Conditions.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>3. Payment</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>3.1 Payment</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            You will be paid up to 20% commission on the total sale price items sold on your Pedlar Store.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>3.2 Payment Method</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            All payments made by Pedlar to you will be to your nominated bank account or Paypal account using the
            details provided by you when registering for the Pedlar Platform or such other payment method allowable and
            nominated by Pedlar. It is your responsibility to ensure that these details have been provided and are
            correct. Pedlar does not bear any responsibility for payments made to an incorrect bank details or Paypal
            account or other account.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>3.3 Taxes</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Pedlar will pay an additional amount for Taxes if this is applicable to you in the relevant Jurisdiction.
            Pedlar may also, from time to time, deduct withholding tax or any similar type of tax from amounts payable
            under cl 4.1 if required by any Law.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>3.4 Time for Payment</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            You will be paid 30 days after the sale is made subject to you not being in breach of this Agreement.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>4. Materials and Intellectual Property Rights (IPR)</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>4.1 Property in Posts</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            All Materials produced by you in connection with your Pedlar Storefront and all IPR in those Materials will
            remain your property and not become the property of Pedlar.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>5. Confidential Information </b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            You acknowledge that:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (1)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            you may be provided with brand Materials by Pedlar to assist you in providing the Services; and
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (2)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            if you are provided with brand Materials, you agree that those brand Materials are provided to you on the
            basis that:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (a)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            you will keep the brand Materials strictly confidential and only disclose brand Materials: when compelled by
            any Law,
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            at which point you will advise Pedlar of this; and
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (b)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            you will take all reasonable steps to keep the brand Materials secure.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>6. Information </b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>6.1 Agreement to provide Information</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            You agree to provide certain personal information to Pedlar as a condition of use of the Pedlar Platform,
            such as your:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (1) name;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (2) email address;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (3) social media handles; and
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (4)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            other information as might be required by Pedlar from time to time, including bank details, address and tax
            status.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (together, the Information)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>6.2 Representations and warranties as to Information</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            You represent and warrant to Pedlar that the Information provided by you is, and will be at all times, true
            and accurate in all respects. You must notify Pedlar of any change in circumstances that may cause the
            Information you have provided to become misleading, inaccurate or untrue. You acknowledge that Pedlar will
            rely on the Information in performing its obligations under the Agreement and in complying with Laws
            (including without limitation, any taxation laws) and you hereby indemnify Pedlar for any special
            incidental, indirect, statutory, exemplary, punitive or consequential damages, including loss of profits,
            arising out of, or in any way related to the inaccuracy of the Information.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>7. Indemnity and Limitation of Liability</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>7.1 No liability for Pedlar</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Pedlar shall not be liable to you for any damages of any kind arising out of your use of the Pedlar
            Platform, whether such damage arises directly or indirectly. You agree and understand that the use of the
            Pedlar Platform is undertaken at your own risk.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>7.2 Indemnity</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            You agree to indemnify and hold harmless, Pedlar, its employees, personnel and agents from any and all
            claims, liabilities, damages, losses and expenses arising out of or in any way connected with any of the
            following matters:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (1) the content of any Posts you may make;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (2) your breach of this Agreement;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (3) your breach of this Agreement;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (4) any misrepresentation made by you;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (5) your violation of any Laws; and
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (6)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            any of the warranties and undertakings you have given under this Agreement; whether such matters are alleged
            or otherwise.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>8. Other matters</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>8.1 General warranties and undertakings</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            For as long as you are signed up for the Pedlar Platform:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (1) you undertake that:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (a)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            that you are and will be the sole author of all Materials produced by you in the course of providing
            Services
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            which will be wholly original to you, and not in breach of the rights of any third party, including but not
            limited to, any IPR;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (b)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            you are in compliance with all relevant Laws in the Jurisdiction and any regulations or guidance notes
            issued
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            pursuant to or in connection with those Laws and will continue to comply with same;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (c)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            you will follow any best practice guidelines endorsed by Pedlar and notified to you from time to time;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (d)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            you will not do anything which would defame, tend to defame or could be construed as being defamatory,
            derogatory
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            or disparaging of Pedlar or any brand or their aﬃliates;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (e) any Materials you produce:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (i)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            will be your sole and original work, unless collaboration is necessary or implied, in which case it will be
            the original
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            work of you and any collaborators;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (ii)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            will not infringe the IPR of any third party or any other proprietary or moral rights of a third party;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (iii) will not infringe any Laws;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (iv) will not be defamatory or tend to defame and third party; and
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (v)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            will not be obscene, graphic, pornographic, racially or religiously insensitive or in any way discriminatory
            or offensive,
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            or with the tendency to offend;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (f)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            you will not post any obscene, graphic, racially or religiously insensitive or any otherwise discriminatory
            or content which
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            is offensive or might tend to offend any person, or do any other thing which might have the tendency to
            offend any person; and
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (2) you represent and warrant that:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (a)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            you have not taken any fraudulent action, or procured that any fraudulent action is taken in relation to
            your social
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            media channels (including, but not limited to, Facebook, Instagram, Twitter, Tiktok or blog).
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>8.2 Exclusivity</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            You agree to not establish a business in competition with Pedlar or compete (directly or indirectly) with
            Pedlar in providing services similar to Pedlar, so long as you are signed up for the Pedlar Platform and for
            a period of 3 months following you removing yourself from the Pedlar Platform.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>8.3 Restriction on action</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            So long as you are signed up for the Pedlar Platform:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (1)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            you agree to not publish any material, whether in print or electronically, make any statement or do any
            other thing which
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            may tend to defame or bring into disrepute, Pedlar or any brand, product or person/party on the Pedlar
            Platform, or otherwise say or do anything that is adverse or prejudicial to Pedlar or a brand, or permit any
            such thing to be done on your behalf; and
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (2)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            you agree to indemnify Pedlar for any costs, losses or liabilities arising out of a breach of paragraph
            8.3(1) by you.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>8.4 No relationship</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            For the avoidance of doubt, nothing in this Agreement constitute any relationship of employer and employee,
            principal and agent or partnership between you and Pedlar. You must not represent yourself as being an
            employee, agent or partner of Pedlar.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>8.5 Monitoring, suspension and termination of access</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Pedlar reserves the right to generally monitor the Pedlar Platform and all activity through the Pedlar
            Platform. If you are in breach of this Agreement or Pedlar suspects that you are in breach of this
            Agreement, or engaged in suspicious, fraudulent, abusive or other activity which Pedlar (in its absolute and
            exclusive discretion) determines is not in accordance with its values or may be detrimental to its or a
            brand’s interests it may choose to suspend or terminate your access to the Pedlar Platform.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>9. General</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>9.1 Force Majeure</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Despite any other provision of this agreement, if a party is unable to perform or is delayed in performing
            an obligation under this agreement by reason of a Force Majeure Event:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (1)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            that obligation is suspended but only so far and for so long as it is affected by the Force Majeure Event;
            and
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (2)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            the affected party will not be responsible for any loss or expense suffered or incurred by any other party
            as a result of,
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            and to the extent that, the affected party is unable to perform or is delayed in performing its obligations
            because of the Force Majeure Event.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>9.2 No waiver</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            No forbearance or delay by Pedlar in exercising or enforcing its rights under the Agreement shall prejudice
            or restrict the rights of Pedlar to exercise or enforce its rights at a later time and no waiver of any such
            rights or of any breach of any contractual terms shall be deemed to be a waiver of any other right or of any
            later breach. Pedlar may only waive a right under the Agreement by doing so in writing.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>9.3 Assignment</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Pedlar may assign its rights under the Agreement by notice to you. You may not assign your rights under this
            Agreement without the consent of Pedlar (which may be given or withheld in Pedlar’s absolute discretion).
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>9.4 No derogation</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            The rights and remedies provided in this Agreement will not affect any other rights or remedies available to
            either party.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>9.5 Severability</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            If any provision of the Agreement is unenforceable, illegal or void, that provision is severed and the other
            provisions of this Agreement remain in force.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>9.6 Jurisdiction</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            This Agreement is governed by the laws of New South Wales and each party submits to the exclusive
            jurisdiction of the courts of New South Wales and any courts which have jurisdiction to hear appeals from
            any of those courts and waives any right to object to any proceedings being brought in those courts.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>Schedule – Additional Provisions</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>10. Australia – Privacy</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>10.1 Definitions</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            The following words have the meanings set out below,:
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (1) Privacy Law means the Privacy Act 1988 (Cth);
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (2) Privacy Policy means Pedlar’ privacy policy found at{" "}
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <a href="http://pedlar.store/">http://pedlar.store/</a> privacy policy;
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            (3)
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Personal Information has the meaning given to that term in the Privacy Law.
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            <b>10.2 Personal Information</b>
          </Typography>
          <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
            Where you provide Information to Pedlar, and such Information constitutes Personal Information, Pedlar does
            not usually, but may disclose that Personal Information to certain third parties in accordance with the
            Privacy Law. Otherwise, Pedlar will abide by its Privacy Policy.
          </Typography>
        </Grid>
        {/* {Creatorterms.map((creatorterms) => {
            return (
              <Box>
                <Grid item xs={12} sm={12} md={12} lg={12} key={creatorterms.id}>
                  <Typography textTransform={"none"} fontSize={"48px"}>
                    {creatorterms.mainheading}
                  </Typography>
                  <br />
                  <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
                    {creatorterms.text}
                  </Typography>
                  <br />
                  <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
                    {creatorterms.heading}
                  </Typography>
                  <br />
                  <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"600"}>
                    {creatorterms.subheading}
                  </Typography>
                  <br />
                  <Typography textTransform={"none"} fontSize={"16px"} fontWeight={"400"}>
                    {creatorterms.subtext}
                  </Typography>
                </Grid>
              </Box>
            );
        })} */}
      </Box>
    </CustomContainer>
  );
};

export default CreatorTerms;
