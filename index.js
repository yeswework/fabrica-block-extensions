const extensions = {};

const extendBlockEdit = BlockEdit => props => wp.element.createElement(BlockEdit, !extensions[props.name] ? props : {...props, extensions: extensions[props.name](wp)});
wp.hooks.addFilter('editor.BlockEdit', 'fabrica/extend-blocks', extendBlockEdit);

export default function registerBlockExtensions(contexts, extensionsData) {
	if (typeof contexts === 'string') { contexts = [contexts]; }
	if (typeof contexts !== 'object') { return false; }
	const getExtensions = typeof extensionsData === 'function' ? extensionsData : () => extensionsData;
	contexts.forEach(context => extensions[context] = getExtensions);
}
