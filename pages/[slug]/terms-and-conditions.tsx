import React from "react";
import { Typography, Box, Divider, useMediaQuery, Theme } from "@mui/material";
import Layout, { CustomContainer } from "components/layout";
import BaseFooter from "components/footer/baseFooter";
import { getUserDetail } from "apis/restApi/getUserDetail";
import { seo } from "utils/seoData";

const TermAndCondition = (props: any) => {
  const { slug, headerData, error } = props;

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Layout
      slug={slug}
      error={error}
      seo={{
        title: seo.termsAndConditionTitle,
        description: seo.termsAndConditionDescription,
      }}
      storefrontName={headerData?.data?.storefrontName}
      collectionId={headerData?.data?.collectionId}
      productsPage={false}
      isMobile={isMobile}
    >
      <CustomContainer>
        <Box sx={{ padding: "15px" }}>
          <Typography sx={{ fontSize: "40px", fontWeight: 600 }}>Terms & Conditions</Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Introduction</Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "30px" }}>
            The conditions of use of Pedlar Store Pty Ltd (ACN 655 606 250) (Pedlar) online platform and social media
            platforms and Apps (the Sites) include these terms of use; the Terms and Conditions, the Shipping & Returns
            Policy and our Privacy Policy, and any other terms and conditions that appear in or are linked to or from
            the Sites (Terms). These Terms govern your use of, and access to, the Sites.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Content</Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "30px" }}>
            The Sites and their content are subject to copyright, and other intellectual property rights. These rights
            are owned by Pedlar, or in the case of some material, a third party, where the third party has provided
            permission to use the content. You must not otherwise reproduce, transmit (including broadcast),
            communicate, upload, adapt, distribute, sell, modify or publish or otherwise use any of the material from
            the Site, including code and software, audio and video excerpts, except as permitted by statute or with our
            prior written consent. Our Sites includes registered trademarks, and other marks that are otherwise
            protected by law.
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            You must not otherwise reproduce, transmit (including broadcast), communicate, upload, adapt, distribute,
            sell, modify or publish or otherwise use any of the material from the Site, including code and software,
            audio and video excerpts, except as permitted by statute or with our prior written consent.
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            Our Sites includes registered trademarks, and other marks that are otherwise protected by law. You may not
            use our trademarks without our written consent or any third party’s trademarks without their consent.
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            The Sites may contain links to third party sites. The links are provided solely for your convenience and do
            not indicate, expressly or impliedly, any endorsement by us of the sites or the information, products or
            services provided at those sites. You access those sites and use the information, products and services made
            available at those sites at your own risk.
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            Many of the products and services offered for sale or advertised and much of the information provided via
            the Site are the products, services and information of third parties. These third-party products, services
            and information are not provided or delivered by Pedlar. Further, we may receive fees or commissions from
            third parties for products or services displayed or made available on the Sites or accessible through a link
            on the Sites. You acknowledge and consent to us receiving such fees.
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            By posting or adding any content onto the Sites or otherwise supplying material or information to us by any
            means, you grant us a perpetual, non-exclusive, royalty-free, irrevocable, worldwide and transferable right
            and license to use that content in any way (including, without limitation, by reproducing, modifying, and
            communicating the content to the public) and permit us to authorise any other person to do the same thing.
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            You consent to any act or omission which would otherwise constitute an infringement of your moral rights,
            and if you supply any content in which any third party has moral rights, you must also ensure that the third
            party also consents in the same manner.
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            The license referred to above will survive any termination of these Terms.
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            You represent and warrant to us that you have all necessary rights to grant the licenses and consents set
            out above.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Use of Sites</Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            You must not misuse any Site and only use it for lawful purposes. You will not use the Sites (including any
            of Pedlar.store) social media sites for any activities, or post or transmit to or via the Sites any
            information or materials, which:
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            a) Breaches any laws or regulations, infringes a third party’s rights or privacy, or which are contrary to
            any applicable standards or codes;
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            b) Interferes with other users, or defames, harasses, threatens, bullies, or offends any person, or which
            inhibits any other user from using the Site;
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            c) Is obscene, indecent, discriminatory, inflammatory or pornographic or which could give rise to civil or
            criminal proceedings;
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            d) Commits or encourages a criminal offence, transmit or distribute a virus, Trojan, worm or post any other
            material which is malicious and technologically harmful;
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            e) That hacks or disables any part of the Sites to corrupt data, cause annoyance to other; or{" "}
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            f) Users, send any spam, unsolicited advertising or promotional material, or attempt to affect the
            performance or functionality of any technology of or accessed through this Site. You represent and warrant
            that:
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            g) You will abide by these Terms and any policies on the Sites which may be posted and made available to you
            from time to time; and
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            h) All information provided by you is true, accurate and correct and you will notify us immediately of any
            changes to that information, this includes but is not limited to credit card or direct debit information.
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "16px", marginTop: "20px" }}>
            i) If you access the Sites from outside Australia, you do so at your own risk and are responsible for
            complying with the laws in the place where you access the Sites. As the Sites may be accessed in Australia
            and overseas. We make no representations that the Sites comply with the laws (including intellectual
            property laws) of any country outside Australia.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>
            Intellectual Property and Rights
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            You acknowledge and agree that the Sites and all data related to the access and use of the Sites (including
            all intellectual property rights in all of the foregoing) are and remain the property of Pedlar. You
            acknowledge and agree that you will not:
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            a) improperly use the Sites; or
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            b) use any of our names, logos or marks for any commercial purpose except as expressly for by us; or
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            c) try to register or otherwise use or claim ownership over any of the our names, logos or marks.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            Nothing in these Terms constitutes a transfer of any intellectual property rights. You acknowledge and agree
            that, as between you and us, we own all intellectual property rights in the Sites.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Indemnities</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            You agree to indemnify and hold us and our suppliers, affiliates, partners, subsidiaries, directors,
            shareholders and employees (collectively, the &ldquo;Indemnified Parties&rdquo;) harmless from any and all
            claims and demands, losses, liability costs and expenses (including, but not limited to, reasonable
            attorneys&apos; fees), incurred by an Indemnified Party arising out of or related to:
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            a) your breach of these Terms;
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            b) any information (including but not limited to your data and your publicly posted information) submitted,
            posted, or otherwise provided by you;
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            b) any information (including but not limited to your data and your publicly posted information) submitted,
            posted, or otherwise provided by you;
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            c) any dispute or litigation between an Indemnified Party and a third party caused by your actions; and
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            d) your negligence or violation or alleged violations of any rights of another. These obligations will
            survive any termination of your relationship with us or your use of the Platform. To the fullest extent
            permitted by law, the foregoing indemnity will apply regardless of any fault, negligence, or breach of
            warranty or contract of ours and /or our suppliers, affiliates, partners, subsidiaries and employees.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Social Media</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            1) Pedlar uses a number of social media sites (eg Twitter, YouTube, Facebook, Instagram and Pinterest,
            TikTok); but these may change over time. We reserve the right to cease any such sites in our discretion. Our
            own Sites may also include social media functions, including user reviews, ratings, forums, and the ability
            to interact with other users
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            2) Third party social media sites will also be governed by their own particular terms of use Pedlar does not
            necessarily endorse, support, sanction, encourage, verify or agree with any comments, opinions or statements
            posted by any users or members on Sites or our social media sites. Any information or material placed online
            by users, including advice or opinions, is the view and responsibility of those users and does not
            necessarily represent our views
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            3) Users must not post or upload any comment, content or link to the Sites (including any social media
            sites) which does not comply with these Terms, including if it is defamatory, harassing, bullying, indecent
            or inflammatory
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            4) We may moderate user-posted content and may remove any content that, in our opinion, is inappropriate.
            While we review content regularly, there may be times when inappropriate or content is viewable before it
            can be removed
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            5) Pedlar does not undertake to inform users when such content has been moderated or removed. We may provide
            warnings, or otherwise block or suspend users or their account in our sole discretion.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            6) Where you post or submit content to a Site, you warrant that you:
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            a) Have the permission of the person/s appearing in the content to submit it to the Site,
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            b) and for them and their image or likeness to be subject to these Terms, including use by Pedlar and our
            Privacy Policy{" "}
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            c) Have the right to submit the content (including copyright); the content is your own
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            d) Original creation; and that you unconditionally and irrevocably consent to any act or e) omission which
            might infringe any moral rights you may have in the content (as defined in the Copyright Act 1968 (Cth));
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            e) We may copy, reproduce, publish, display, alter, or distort user submitted content, and use it for any
            purpose, (including without limitation, any future promotions or campaigns involving Pedlar) at any time in
            the future, and via any media;
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            f) Pedlar does not accept any responsibility or liability where content is downloaded from the Sites, nor in
            relation to any matters after such download. Third parties may comment on, link to, re-post, or otherwise
            deal with the user submitted content once it is submitted, and we do not accept any liability for such
            actions; and
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            Any personal information you provide about yourself, or the person/s appearing in user submitted content,
            may be used by Pedlar to conduct campaigns, research and marketing activities (including informing you about
            special offers from Pedlar and to become part of databases maintained by us or any of our associated
            entities), and otherwise be used in accordance with our Privacy Policy.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Product Specifications</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            Features and specifications of Products described or depicted on the site are provided by the third-party
            brand sellers of the product(s) and are subject to change without notice.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            To the extent permitted by law, Pedlar makes no warranty or representation regarding the standard of any
            goods or services to be supplied by a third-party seller on the site.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Pricing</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            Prices displayed on the site are subject to change without notice. Pricing is supplied by third-party Brand
            Sellers and is not controlled by Pedlar or any of it’s employees. Negotiation of the price is not possible.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Charging of Credit Card</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            If we are unable to charge a credit card due to insufficient funds or other errors, then we will attempt to
            contact the customer by email or via the message centre in your account to rectify the issue. If the
            customer does not contact us to resolve the issue within 48 hours, the order will be cancelled. Please note
            that stock availability and prices may change if the time between placing the order and credit card details
            being corrected or funds being available is delayed.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            By entering into any transaction, you warrant and represent that all information you provide is true and
            correct (including, without limitation your credit card/bank account number, card expiration date and
            address), that any transactions are authorised, and that you are the legal holder of any credit card or
            payment account used to enter into any transaction. By providing a method of payment pursuant to a
            transaction, you confirm that you are permitted to use that method of payment. You also authorise us to
            collect and store it, along with other information related to your transaction. You authorise us (and our
            designated payment processor) to charge the full amount to the payment source you designate for the
            transaction. If your payment results in an overdraft or other fee from your bank, you alone are responsible
            for that fee.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            In the event (a) your method of payment is not valid, (b) we determine, in our sole discretion that a
            transaction is unauthorised, (c) your method of payment cannot be processed at the time of any charge, or
            (d) any charge is disputed for any reason other than the undisputed failure by us to deliver the items
            purchased by you, we reserve the right to immediately terminate any pending transactions, suspend your
            account, thereby terminating all of our obligations to you under these Terms, and, in addition, to charge
            you an administrative processing fee equal to AUD$10, per instance, which charge you hereby authorise by
            entering into any transaction through the Sites.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Privacy</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            Your personal information will be collected, used and shared in accordance with the Pedlar Privacy Policy.
            By providing your personal information to us, you consent to the collection, use, storage and disclosure of
            that information as described in the Privacy Policy and these Terms. All users of Pedlar site may be subject
            to additional third-party Privacy Policies.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Delivery of Products</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            The Brand Seller, and not Pedlar, is responsible for the delivery and supply of the products to you. The
            Seller utilises their own shipping and distribution networks and may charge different rates for shipping on
            products.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            We will provide you with delivery time frames and you may contact our customer service team directly to
            obtain an estimated delivery date and/or tracking information if not automatically provided to you following
            order confirmation. .Any delivery dates which may be specified on Pedlar are estimated dates only. You
            acknowledge that these delivery dates may vary and delays in delivery may be unavoidable.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            We will try to ensure that all orders are delivered in a prompt and timely manner. However, from time to
            time, it is possible that shipping and other factors outside of our control may result in delays. Pedlar
            does not accept any liability for loss or damage suffered by anyone as a result of any such delays.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Shipping & Delivery</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            All Brand Sellers on Pedlar provide efficient shipping service throughout Australia. Delivery and Shipping
            is organised by the brands directly and shipping costs may vary from brand to brand.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            Please refer to the Shipping and Delivery terms within the relevant Sellers/Brands product pages for
            information.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            We ask all our brand partners on Pedlar to dispatch items within 24 hours. Please reach out to our team at
            hello@pedlar.store if you have any queries relating to the shipment of your order.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            How do I track my order? Once your order is on it’s way, will send you a shipment email containing a
            tracking link and details of your order.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            What are your Delivery timeframes? The standard delivery time is between 3-10 business days from when the
            order is placed. In the event that a product ordered is not available we will endeavour to notify you within
            2 business days to arrange an alternative product or a full refund.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            If your order contains products from multiple Brands, then these will be shipped to you separately. Once
            orders have been dispatched from the Brand, you will receive shipment and tracking information from Pedlar.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Returns & Exchanges</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            All returns will be at the expense of Pedlar unless otherwise specified.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            Any product being returned for change of mind must be:
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            • In its original condition
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            • Unworn, unmarked and unwashed
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            • In the original packaging or box
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            • Not defective as a result of misuse
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            • Tags still attached
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            Hygiene and our customers’ safety is super important, so certain items can’t be returned for refunds
            including:{" "}
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            • Face + Body products if opened, used or protective seal is not intact
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            • Underwear if the hygiene seal is not intact or any labels have been broken
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            • Swimwear if the hygiene seal is not intact or any labels have been broken
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            • Face coverings if the seal has been tampered with or is broken.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            • Pierced jewellery if the seal has been tampered with or is broken.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            By submitting your request, you will receive an email with a returns address label and further instructions
            to complete your return.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            If the product(s) you have returned qualifies for a refund, we will process this refund via the same payment
            method used to place the order. Please allow 7-10 business days from receiving a returns approval to receive
            your funds.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Payments</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            What payment methods do you accept? We accept payments via Paypal, VISA, Mastercard, Google Pay, and Apple
            Pay. Your account will be charged at the time of order. Please note the transaction will appear on your
            statement as Pedlar Pty Ltd. At this time we are unable to offer Gift Vouchers.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>
            Faulty or Damaged Products
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            All goods sold on Pedlar come with guarantees that cannot be excluded by Australian Consumer Law. You are
            entitled to a replacement or refund for a major failure and compensation for any other reasonably
            foreseeable loss or damage. You are also entitled to have the goods repaired or replaced if the goods fail
            to be of acceptable quality and the failure does not amount to a major failure.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            If any part of your order or products are defective or faulty, you should first contact Pedlar Customer
            Service team on hello@pedlar.store or through your account. We will coordinate a response from the
            third-party seller and will resolve any dispute in accordance with the Australian Consumer Law, this may
            include, at our sole discretion, replacing or repairing the product or refunding you the price of the
            product to your original payment method.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Cookies</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            Cookies are small pieces of information captured when your device is used to access online content. Pedlar
            Privacy Policy outlines how we use cookies. If you disable cookies on your browser or device, you may not be
            able to fully experience all features of the Sites
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Disclaimer</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            Pedlar will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses
            or other technologically harmful material that may infect your computer equipment, computer programs, data
            or other proprietary material due to your use of this Site or to your downloading of any material posted on
            it, or on any Site linked to it.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>No Guarantee</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            This clause applies only to the maximum extent permitted by applicable law, and does not (and is not
            intended to) override any rights that you have pursuant to applicable law, including the Australian Consumer
            Law. Pedlar and its related body corporates (as applicable) provide, and you accept that:
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            1. We make no representations, warranties or guarantees of any kind, express or implied as to the operation
            of our Sites or the information, content, materials or products included on our Sites, except as otherwise
            provided under applicable law.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            2. We will not be liable for any damages arising out of, or in relation to, the use of our Sites or sites
            linked to our Sites. This limitation applies to direct, indirect, consequential, special, punitive or other
            damages suffers, as well as damages for loss of profits, business interruption or the loss of data or
            information.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            3. You assume all risk of use of all features of a Site. You release Pedlar of all responsibility for any
            consequences of their use.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            4. By continuing to access our Sites you agree that your access to, and use of, them is subject to these
            terms and all applicable laws, and is at your own risk.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            5. Our Site and its content is provided to you on “as is” basis; our Sites may contain errors and
            inaccuracies and may not be complete or current. We cannot guarantee our Sites will always be available or
            fault- or virus- free
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            6. Pedlar is an online platform where you may purchase products from Brand Sellers via Creator’s
            storefronts. Pedlar acts as a limited agent for the Brand Seller, the Creator and yourself in order to: (a)
            facilitate the sale and purchase of products; (b) collect payment from you and then remit payment to the
            Seller and Creator; and (c) provide associated support services in relation to the sale and purchase of
            products, We will not be a party to or in any way be responsible for monitoring any transaction between a
            Seller and yourself and therefore do not warrant, endorse, guarantee or assume responsibility for any
            product advertised or offered by a Seller through the Sites.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            7. Pedlar and its related body corporates expressly disclaim all liability for any act or omission of you,
            any Seller or other third party.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            8. Each Brand Seller is also responsible for ensuring their products or services and any related content or
            advertising complies with all applicable laws including the Australian Consumer Law.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>Updates & Termination</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            You acknowledge and agree that we may:
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            1. vary these Terms at any time. By continuing to use the Site you consent to any variations. It is your
            responsibility to regularly check these Terms for any variations.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            2. at any time, and in our sole discretion, suspend or terminate the access to the Site for any user without
            notice for any reason, including but not limited to a breach of these Terms. Suspension or termination shall
            not affect either party’s rights or liabilities.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            3. disclose any information we may have about a user in relation to an investigation or allegation that your
            use of the Site breaches these Terms, or any applicable laws.
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", paddingLeft: "50px" }}>
            4. identify or bring legal action against any person who is or may be breaching these Terms, including
            obtaining injunctive relief in the relevant jurisdiction.
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>General</Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px" }}>
            These Terms will be binding upon each party hereto and its successors and permitted assigns, and governed by
            and construed in accordance with the laws of the State of New South Wales without reference to conflict of
            law principles. These Terms will not be assignable or transferable by you without our prior written consent
            however we may assign these Terms without your consent .
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: 400, marginTop: "20px", marginBottom: "50px" }}>
            These Terms (including all of the policies and other Agreements described in these Terms, which are hereby
            incorporated herein by this reference) contain the entire understanding of the parties regarding its subject
            matter, and supersedes all prior and contemporaneous agreements and understandings between the parties
            regarding its subject matter. No failure or delay by a party in exercising any right, power or privilege
            under these Terms will operate as a waiver thereof, nor will any single or partial exercise of any right,
            power or privilege preclude any other or further exercise thereof or the exercise of any other such right,
            power, or privilege. The invalidity or unenforceability of any provision of these Terms will not affect the
            validity or enforceability of any other provision of these Terms, all of which will remain in full force and
            effect.
          </Typography>
        </Box>
      </CustomContainer>
      <Divider sx={{ marginTop: "50px", marginBottom: "10px", height: "1px" }} />
      <BaseFooter />
    </Layout>
  );
};

export default TermAndCondition;

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const headerData = await getUserDetail(slug);
  try {
    if (headerData?.data) {
      return {
        props: {
          headerData: headerData ? headerData : [],
          slug: slug || [],
        },
      };
    } else {
      return {
        props: {
          error: true,
        },
      };
    }
  } catch (error) {
    console.log("");
  }
}
