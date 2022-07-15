import React from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TypographyExtension from "@tiptap/extension-typography";
import UnderlineExtension from "@tiptap/extension-underline";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Dropcursor from "@tiptap/extension-dropcursor";
import CharacterCount from "@tiptap/extension-character-count";
import Link from "@tiptap/extension-link";
import Code from "@tiptap/extension-code";
import TextAlign from "@tiptap/extension-text-align";
import Focus from "@tiptap/extension-focus";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import Image from "../extension/Image";
import { ColorHighlighter } from "./ColourHighlighter";
import { SmilieReplacer } from "./SmilieReplacer";

import ProjectCreateContentToolbar from "./Toolbar";

// import "./styles.scss";
import EditorStyled from "./style";

export default function EditorComponent({
  // setContent,
  content,
}: {
  // setContent: (value: string) => void;
  content: string;
}) {
  const limit = 2000;
  const editor = useEditor({
    extensions: [
      StarterKit,
      Subscript,
      Superscript,
      Highlight,
      TypographyExtension,
      UnderlineExtension,
      Document,
      Paragraph,
      Text,
      Dropcursor,
      Code,
      Link,
      CharacterCount.configure({
        limit,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Focus.configure({
        className: "has-focus",
        mode: "all",
      }),
      ColorHighlighter,
      SmilieReplacer,
      Image,
    ],
    content: content,
  });

  /* React.useMemo(() => {
    if (editor?.getHTML()) setContent(editor?.getHTML());
  }, [editor?.getHTML()]); */

  return (
    <EditorStyled>
      {editor && <ProjectCreateContentToolbar editor={editor} />}
      <EditorContent editor={editor} />
      {editor && (
        <div
          className={`character-count ${
            editor.storage.characterCount.characters() === limit
              ? "character-count--warning"
              : ""
          }`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <div className="character-count__text" style={{ marginLeft: 5 }}>
            {editor.storage.characterCount.characters()}/{limit} characters
          </div>
        </div>
      )}
    </EditorStyled>
  );
}
