import React from 'react'

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Check, ChevronsUpDown } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'



const userTypes = [
    {
        value: "user",
        label: "Regular user",
    },
    {
        value: "laundryUser",
        label: "Laundry Services Provider",
    },
    {
        value: "dispatchUser",
        label: "Dispatch Company",
    },
    {
        value: "restaurant",
        label: "Restaurant",
    }
]

const DropDownInput = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild >
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 border-gray-700 focus:ring-2 focus:ring-orange-500"
                >
                    {value
                        ? userTypes.find((user) => user.value === value)?.label
                        : "Service Type..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 ">
                <Command className='bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 border-gray-700 focus:ring-2 focus:ring-orange-500'>
                    <CommandInput placeholder="Service Type..." />
                    <CommandList className='bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 border-gray-700 focus:ring-2 focus:ring-orange-500'>
                        <CommandGroup>
                            {userTypes.map((user) => (
                                <CommandItem
                                    key={user.value}
                                    value={user.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === user.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {user.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )

}

export default DropDownInput

