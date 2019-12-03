const extensions = {};

const extendBlockEdit = (BlockEdit) => (
	(props) => wp.element.createElement(BlockEdit, {...props, extensions: extensions[props.name]})
);
wp.hooks.addFilter('editor.BlockEdit', 'fabrica/extend-blocks', extendBlockEdit);

export default function registerBlockExtensions(contexts, data) {
	if (typeof contexts === 'string') { contexts = [contexts]; }
	if (typeof contexts !== 'object') { return false; }
	contexts.forEach(context => extensions[context] = data);
}
