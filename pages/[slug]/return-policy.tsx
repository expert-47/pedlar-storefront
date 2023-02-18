import { Divider } from "@mui/material";
import BaseFooter from "components/footer/baseFooter";
import Layout from "components/layout";
import React from "react";
import ReturnPolicy from "../../landing-components/static-pages//return-policy/return-policy";
import { getUserDetail } from "api/restApi/getUserDetail";
import useSwr from "swr";

const Returnpolicy = (props) => {
  const { slug, headerData } = props;
  const { data, loading } = useSwr(`storefront/${slug}/vendors/`);
  const { data: shopList, loading: shopListLoading } = useSwr(`storefront/${slug}/categories/`);
  return (
    <Layout
      seo={{
        title: process.env.NEXT_PUBLIC_RETURN_POLICY_TITLE,
        description: process.env.NEXT_PUBLIC_RETURN_POLICY_DESCRIPTION,
      }}
      data={data}
      shopList={shopList}
      loading={loading}
      shopListLoading={shopListLoading}
      storefrontName={headerData?.data?.storefrontName}
    >
      <ReturnPolicy slug={slug} />
      <Divider sx={{ marginTop: "50px", marginBottom: "10px", height: "1px" }} />
      <BaseFooter />
    </Layout>
  );
};

export default Returnpolicy;

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const headerData = await getUserDetail(slug);

  return {
    props: {
      headerData: headerData ? headerData : [],
      slug: slug || [],
    },
  };

  return {
    props: {
      error: true,
    },
  };
}
