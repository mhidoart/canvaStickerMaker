import React from "react";
import { upload } from "@canva/asset";
import { addNativeElement } from "@canva/design";
import { Button, Rows, Text } from "@canva/app-ui-kit";
import styles from "styles/components.css";
import { useRef, useState } from 'react';



export function App() {
  async function handleClick() {
    // Upload an image
    const result = await upload({
      type: "IMAGE",
      mimeType: "image/jpeg",
      url: "https://www.canva.dev/example-assets/image-import/image.jpg",
      thumbnailUrl:
        "https://www.canva.dev/example-assets/image-import/thumbnail.jpg",
    });

    // Add the image to the design
    await addNativeElement({
      type: "IMAGE",
      ref: result.ref,
    });

    
  }

  return (
    
    <div className={styles.scrollContainer}>
    <Rows spacing="2u">
      <Text>
        To make changes to this app, edit the <code>src/app.tsx</code> file,
        then close and reopen the app in the editor to preview the changes.
      </Text>
      <Button variant="primary" onClick={handleClick} stretch>
        generate stickers
      
      </Button>
    </Rows>
  </div>
  );
}