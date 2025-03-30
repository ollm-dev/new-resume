import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				resume: {
					blue: '#3A5CCC',      // 现代亮蓝色 - 主色调
					lightBlue: '#8A7FFF', // 更偏淡紫色的色调
					purple: '#9875FF',    // 淡紫色 - 新增色调
					gray: '#F5F5FF',      // 超淡紫灰色 - 背景色
					darkGray: '#2A3035',  // 近黑灰色 - 主文本
					accent: '#FF6B9D',    // 粉红色 - 强调色
					accent2: '#00B8C2',   // 青绿色 - 第二强调色
					neutral: '#FAFAFF',   // 近白色（带紫) - 卡片背景
					gradient: {
						start: '#3A5CCC',  // 渐变开始色 - 保持蓝色
						end: '#8A7FFF'     // 渐变结束色 - 改为淡紫色
					},
					purpleGradient: {
						start: '#8A7FFF',  // 紫色渐变开始色
						end: '#B195FF'     // 紫色渐变结束色
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
			},
			boxShadow: {
				'soft': '0 5px 30px -15px rgba(0, 0, 0, 0.15)',
				'hover': '0 10px 40px -15px rgba(0, 0, 0, 0.2)',
				'card': '0 2px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
				'accent': '0 15px 30px -10px rgba(255, 107, 157, 0.2)',
				'blue': '0 15px 30px -10px rgba(58, 92, 204, 0.2)',
				'purple': '0 15px 30px -10px rgba(138, 127, 255, 0.25)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
			},
			backdropBlur: {
				xs: '2px',
			}
		}
	},
	plugins: [
		animatePlugin,
		plugin(function({ addUtilities }) {
			addUtilities({
				'.text-shadow-sm': {
					'text-shadow': '0 1px 2px rgba(0, 0, 0, 0.1)'
				},
				'.text-shadow': {
					'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)'
				},
				'.text-shadow-md': {
					'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)'
				},
				'.text-shadow-lg': {
					'text-shadow': '0 15px 30px rgba(0, 0, 0, 0.11), 0 5px 15px rgba(0, 0, 0, 0.08)'
				},
				'.text-gradient': {
					'background-clip': 'text',
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent',
				},
				'.glassmorphism': {
					'background': 'rgba(255, 255, 255, 0.8)',
					'backdrop-filter': 'blur(12px)',
					'-webkit-backdrop-filter': 'blur(12px)',
				},
				'.purple-gradient-text': {
					'background-image': 'linear-gradient(45deg, #8A7FFF, #B195FF)',
					'background-clip': 'text',
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent',
				}
			})
		})
	],
} satisfies Config;
