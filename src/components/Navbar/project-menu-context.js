import React from 'react'

export const ProjectMenuContext = React.createContext({
    isOpen: false,
    toggleOpen: (isOpen) => !isOpen
});

export const ProjectMenuProvider = ProjectMenuContext.Provider;

