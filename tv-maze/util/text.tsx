import { Typography } from "@mui/material";
import React from "react";
import { ReactElement } from "react";

const HtmlToReact = require('html-to-react');
const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

const isValidNode = function () {
  return true;
};

const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

const processingInstructions = [
  {
    shouldProcessNode: function (node: any) {
      return node.name === 'p';
    },
    processNode: function (node: any, children: any, index: number) {
      return (
        <Typography key={index} variant="body1">{children}</Typography>
      )
    }
  },
  {
    shouldProcessNode: function (node: any) {
      return true;
    },
    processNode: processNodeDefinitions.processDefaultNode
  }
];

export function renderHtml(html: string): ReactElement {
  return <>{htmlToReactParser.parseWithInstructions(html, isValidNode, processingInstructions)}</>;
}

export function removeHtmlTags(html: string): string {
  return html.replace(/<\/*[a-z]*>/g, "");
}
