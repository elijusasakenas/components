"use client";

import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";

import DefaultErrorPage from "next/error";
import Layout from "@/components/layout/templates/default";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogoEnabled } from "@/redux/header/logo";
import { setLogoCmsEnabled } from "@/redux/header/logoCms";
import "../builder-registry";

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
builder.apiVersion = "v3";

export function RenderBuilderContent(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLogoEnabled(false));
    dispatch(setLogoCmsEnabled(true));
  }, [dispatch]);

  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  // If "content" has a value or the section is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (props.content || isPreviewing) {
    return (
      <Layout
        mainNavigation={props.mainNavigation}
        footerNavigation={props.footerNavigation}
        snippets={props.snippets}
        languages={props.languages}
        foreignKey={props.foreignKey}
      >
        <BuilderComponent {...props} />
      </Layout>
    );
  }
  // If the `content` is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}
