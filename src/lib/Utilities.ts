import { TemplateType, TemplateValues } from '@/types/Template';

export function ChangeBG(value: TemplateType) {
    const RootElement = document.getElementById('root');

    if (RootElement) {
        RootElement.classList.remove(...TemplateValues.map((tempval) => `bg-${tempval}`));
        RootElement.classList.add(`bg-${value}`);
    }
}

export function RandomNum(low: number, high: number): number {
    if (low > high) [low, high] = [high, low];
    return low + Math.floor(Math.random() * (high + 1 - low));
}
