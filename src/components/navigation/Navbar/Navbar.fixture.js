import React from 'react';
import { Navbar } from '.';
import { NavItem } from '../NavItem';
import { NavSection } from '../NavSection';

export default (
    <Navbar allo={true}>
        <NavSection>
            <NavItem href="#" title="NavItem 1"></NavItem>
            <NavItem href="#" title="NavItem 2"></NavItem>
        </NavSection>
        <NavSection>
            <NavItem href="#" title="NavItem 3"></NavItem>
            <NavItem href="#" title="NavItem 4"></NavItem>
        </NavSection>
        <NavSection>
            <NavItem href="#" title="NavItem 5"></NavItem>
            <NavItem href="#" title="NavItem 6"></NavItem>
        </NavSection>
    </Navbar>
    
) 