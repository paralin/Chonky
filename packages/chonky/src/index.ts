import {
    GenericFileActionHandler,
    MapFileActionsToData,
} from './types/action-handler.types';
import { ChonkyActionUnion } from './types/file-browser.types';

export { FileBrowser } from './components/external/FileBrowser';
export { FileNavbar } from './components/external/FileNavbar';
export { FileToolbar } from './components/external/FileToolbar';
export { FileList } from './components/file-list/FileList';
export { FileContextMenu } from './components/external/FileContextMenu';
export { FullFileBrowser } from './components/external/FullFileBrowser';

export { ChonkyActions, DefaultFileActions, OptionIds } from './action-definitions';

export { defineFileAction } from './util/helpers';
export { ChonkyIconContext } from './util/icon-helper';
export { FileHelper } from './util/file-helper';
export type { makeGlobalChonkyStyles, ChonkyTheme } from './util/styles';

export type { FileData, FileArray } from './types/file.types';
export type {
    FileAction,
    FileActionEffect,
    FileSelectionTransform,
    FileActionButton,
    CustomVisibilityState,
} from './types/action.types';
export type {
    GenericFileActionHandler,
    MapFileActionsToData,
    FileActionData,
    FileActionState,
} from './types/action-handler.types';
export type { ChonkyActionUnion } from './types/file-browser.types';
export { ChonkyIconName } from './types/icons.types';
export type ChonkyIconProps = import('./types/icons.types').ChonkyIconProps;
export type { FileBrowserHandle, FileBrowserProps } from './types/file-browser.types';
export type { FileViewMode } from './types/file-view.types';
export type FileViewConfig = import('./types/file-view.types').FileViewConfig;
export type FileViewConfigGrid = import('./types/file-view.types').FileViewConfigGrid;
export type FileViewConfigList = import('./types/file-view.types').FileViewConfigList;
export type { ThumbnailGenerator } from './types/thumbnails.types';

export type { I18nConfig, ChonkyFormatters } from './types/i18n.types';
export {
    defaultFormatters,
    getI18nId,
    getActionI18nId,
    I18nNamespace,
} from './util/i18n';

export { setChonkyDefaults } from './util/default-config';

export { ChonkyDndFileEntryType } from './types/dnd.types';
export type ChonkyDndFileEntryItem = import('./types/dnd.types').ChonkyDndFileEntryItem;

export type FileActionHandler = GenericFileActionHandler<ChonkyActionUnion>;
export type ChonkyFileActionData = MapFileActionsToData<ChonkyActionUnion>;

// Extensions
export * from './extensions';

// Redux/Store
export * from './redux/reducers';
export * from './redux/store';
export * from './redux/selectors';
export {
    thunkDispatchFileAction,
    thunkRequestFileAction,
} from './redux/thunks/dispatchers.thunks';
