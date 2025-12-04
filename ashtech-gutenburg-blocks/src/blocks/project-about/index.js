import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';
import './editor.scss';

registerBlockType('ashtech/project-about', {
    edit: Edit,
    save,
});
