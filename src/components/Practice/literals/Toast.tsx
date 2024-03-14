type VerticalPosition = 'top' | 'center' | 'bottom'
type HorizontalPosition = 'left' | 'center' | 'right'

type ToastProp = {
    position: Exclude<`${VerticalPosition}-${HorizontalPosition}`, 'center-center'> | 'center'
}

export const Toast = ({position}: ToastProp) => {
    return <div>Toast Notificatoion Position - {position}</div>
}