import { useEffect, useState } from 'react';
import { ulid } from 'ulidx';

type AttributeGaugeProps = {
    min?: number;
    max?: number;
    value?: number;
    temp?: number;
    onChange?: (value: number) => void;
};

export default function AttributeGauge({ min, max, value, temp, onChange }: AttributeGaugeProps) {
    const realMin = min ?? 0;
    const realMax = max ?? 5;
    const realValue = value ?? 0;
    const realTemp = temp ?? 0;

    const [currentValue, setCurrentValue] = useState<number>(realValue < realMin ? realMin : realValue);
    const prekey = ulid();

    useEffect(() => {
        setCurrentValue(realValue < realMin ? realMin : realValue);
    }, [value]);

    function HandleClick(newValue: number) {
        if (newValue >= realMin) {
            setCurrentValue(newValue);
            if (onChange) onChange(newValue);
        } else if (newValue <= realMin) {
            setCurrentValue(realMin);
            if (onChange) onChange(realMin);
        }
    }

    function GetBackground(index: number, current: number) {
        const realIndex = index + 1;

        if (realIndex <= current) {
            if (realIndex <= realMin) return 'btn-neutral';
            else if (realIndex > realMax) return 'btn-secondary bg-secondary/80';
            else return 'btn-primary';
        } else {
            if (realIndex > realMax) return 'btn-ghost bg-base-100/80';
            else return 'btn-ghost';
        }
    }

    return (
        <div className='join rounded-md border border-black'>
            <div className='bi-x btn join-item p-0 text-3xl btn-sm btn-error' onClick={() => HandleClick(0)} />
            {[...Array<null>(max ?? 5)].map((_value, index) => {
                return (
                    <div key={`${prekey}${index}`} className={`btn join-item min-h-8 min-w-8 p-0 text-3xl btn-sm ${GetBackground(index, currentValue)}`} onClick={() => HandleClick(index + 1)}>
                        {index + 1}
                    </div>
                );
            })}
            {[...Array<null>(temp ?? 0)].map((_value, index) => {
                return (
                    <div key={`${prekey}temp${index}`} className={`btn join-item min-h-8 min-w-8 p-0 text-3xl btn-sm ${GetBackground((max ?? 5) + index, currentValue)}`} onClick={() => HandleClick((max ?? 5) + index + 1)}>
                        {(max ?? 5) + index + 1}
                    </div>
                );
            })}
        </div>
    );
}
