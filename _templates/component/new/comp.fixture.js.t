---
to: src/<%= category %>/<%= section %>/<%= name %>/<%= name %>.fixture.js
---
<% const comp = name -%>
import React from 'react';
import { <%= name %> } from '.';

export default <<%= name %> />;

export const Basic = (args) => <<%= name %> {...args} />;