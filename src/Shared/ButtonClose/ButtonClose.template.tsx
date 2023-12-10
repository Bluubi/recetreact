import Button from '../Button/Button.template.tsx'

export const ButtonCloseTemplate = {
	action: {
		render: () => {
			return Button({
				children: <span>X</span>,
				callback: close,
				testId: 'secondary',
				theme: 'bg-none',
				mode: 'close',
				position: 'absolute',
				place: 'top-right',
			}).render()
		},
	},
}

function close() {}
