import React from 'react'

export const ProjectMenuContext = React.createContext({
    isOpen: false,
    toggleOpen: () => { }
});

export const ProjectMenuProvider = ProjectMenuContext.Provider;

