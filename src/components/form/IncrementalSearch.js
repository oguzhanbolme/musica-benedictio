import React, { useContext } from 'react'
import Icon from '@mdi/react'
import { ThemeContext } from '../../context/Theme'
import debounce from '../../utils/debounce'

export default function IncrementalSearch({
    className,
    placeholder,
    icon,
    value,
    setValue,
    items,
    itemTemplate,
    debounceMode,
    debounceTimeout = 500,
}) {
    const { darkMode } = useContext(ThemeContext)
    const setValueWithDebounce = debounce((val) => setValue(val), debounceTimeout)

    return (
        <div className={`relative ${className}`}>
            <div className="relative">
                {icon && (
                    <div className="absolute h-full flex items-center text-gray-400 pl-2">
                        <Icon path={icon} size={1} />
                    </div>
                )}

                <input
                    type="text"
                    className={`${darkMode ? 'bg-gray-700 border-black outline-transparent' : 'bg-gray-50'} border text-sm ${items && value !== '' ? 'rounded-t-lg' : 'rounded-lg'} block w-full p-2.5 ${icon && 'pl-10'}`}
                    placeholder={placeholder}
                    onChange={(e) => debounceMode ? setValueWithDebounce(e.target.value) : setValue(e.target.value)}
                />
            </div>

            {items && value !== '' && (
                <ul
                    className={`absolute overflow-hidden block w-full ${darkMode ? 'bg-gray-700 border-black' : 'bg-gray-50'} border text-sm rounded-b-lg p-2.5`}
                >
                    {items.map((item) => itemTemplate(item))}
                </ul>
            )}
        </div>
    )
}
