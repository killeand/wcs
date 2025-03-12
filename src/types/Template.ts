export const TemplateValues = ['mortal', 'vampire', 'mage', 'werewolf', 'hunter'] as const;
export type TemplateType = (typeof TemplateValues)[number];
