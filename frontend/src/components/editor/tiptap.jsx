// useEditor is a hook that initializes the editor instance
// EditorContent is a component that renders the editor content
// EditorContext is a context provider for the editor instance 
import {useEditor, EditorContent, EditorContext} from '@tiptap/react';
// useCurrentEditor is a hook that provides access to the current editor instance
import { useCurrentEditor } from '@tiptap/react';
// useEditorState is a hook that provides access to the editor state
import { useEditorState } from '@tiptap/react';
// FloatingMenu and BubbleMenu are components for rendering floating and bubble menus
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus';
// StarterKit is a collection of basic extensions for the editor
import StarterKit from '@tiptap/starter-kit';
// useMemo is a React hook that memoizes a value to optimize performance.
import { useMemo } from 'react';

const tipTap = () => {
    const editor = useEditor({
        extensions: [StarterKit], // define the entension array
        content: '<p>Hello World!</p>', // define the content
    })

    // Memoize the editor instance to prevent unnecessary re-renders
    // the first editor is the value we want to provide, and the second editor is the dependency array
    const providerValue = useMemo(() => ({editor}), [editor]);

    return (
        <EditorContext.Provider value={providerValue}> 
            <EditorContent editor={editor} />
            <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
            <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
        </EditorContext.Provider>
    )
}

const EditorJSONPreview = () => {
  const { editor } = useCurrentEditor()

  return <pre>{JSON.stringify(editor.getJSON(), null, 2)}</pre>
}

const editorSate = useEditorState({
    editor,

    selector: ({ editor }) => { 
        // This function is called whenever the editor state changes, 
        // and it receives the current editor instance as an argument. 
        // We can use this function to extract the relevant information 
        // from the editor and return it as an object. The returned object 
        // will be available in the component that uses the useEditorState 
        // hook.
        if (!editor) return null; // If the editor instance is not available, return null to avoid errors.

        return {
            isEditable: editor.isEditable,
            currentSelection: editor.state.selection,
            currentContent: editor.getJSON(),
            isBold: editor.isActive('bold'),
            isItalic: editor.isActive('italic'),
            isUnderline: editor.isActive('underline'),
        }
    }
})

export default tipTap;