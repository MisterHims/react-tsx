import { styled } from '@mui/system';
import ButtonUnstyled from '@mui/core/ButtonUnstyled';
import { Theme } from '@mui/material/styles';

interface QxButtonProps {
  theme?: Theme;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children?: React.ReactNode;
}

const QxButtonRoot = styled(ButtonUnstyled, {
  shouldForwardProp: (prop) => prop !== 'color',
})<QxButtonProps>(({ theme, variant, size, color }) => ({
  // Styles communs
  color: variant === 'contained' ? theme.palette.common.white : theme.palette[color!].main,
  borderRadius: theme.shape.borderRadius,
  fontWeight: theme.typography.fontWeightBold,
  transition: theme.transitions.create(['background-color', 'box-shadow'], {
    duration: theme.transitions.duration.short,
  }),

  // Variants
  ...(variant === 'outlined' && {
    color: theme.palette[color!].main,
    borderColor: theme.palette[color!].main,
    borderWidth: 2,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette[color!].main,
      color: theme.palette.common.white,
    },
  }),
  ...(variant === 'contained' && {
    backgroundColor: theme.palette[color!].main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette[color!].dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette[color!].main,
      },
    },
  }),
  ...(variant === 'text' && {
    padding: 0,
    color: theme.palette[color!].main,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }),

  // Size
  ...(size === 'small' && {
    padding: '6px 16px',
    fontSize: theme.typography.pxToRem(14),
  }),
  ...(size === 'medium' && {
    padding: '8px 22px',
    fontSize: theme.typography.pxToRem(16),
  }),
  ...(size === 'large' && {
    padding: '12px 28px',
    fontSize: theme.typography.pxToRem(18),
  }),

  // Disabled
  '&.Mui-disabled': {
    opacity: 0.5,
    pointerEvents: 'none',
  },
}));

const QxButton = (props: QxButtonProps) => {
  const { variant = 'text', size = 'medium', color = 'primary', ...other } = props;
  return (
    <QxButtonRoot
      variant={variant}
      size={size}
      color={color}
      disableRipple
      disableTouchRipple
      {...other}
    />
  );
};

export default QxButton;
