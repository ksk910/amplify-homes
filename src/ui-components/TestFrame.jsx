/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Alert, Button, Flex, Heading } from "@aws-amplify/ui-react";
export default function TestFrame(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="58px"
      direction="column"
      overflow="hidden"
      position="relative"
      padding="16px 40px 16px 40px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Heading
        display="flex"
        shrink="0"
        width="308px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        level="1"
        children="Heading 1"
        {...getOverrideProps(overrides, "Flex.Heading[0]")}
      ></Heading>
      <Alert
        display="flex"
        shrink="0"
        heading="Success"
        variation="success"
        isDismissible="true"
        hasIcon="true"
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        {...getOverrideProps(overrides, "Flex.Alert[0]")}
      ></Alert>
      <Button
        display="flex"
        shrink="0"
        width="206px"
        size="large"
        variation="primary"
        children="Primary Button"
        {...getOverrideProps(overrides, "Flex.Button[0]")}
      ></Button>
    </Flex>
  );
}
