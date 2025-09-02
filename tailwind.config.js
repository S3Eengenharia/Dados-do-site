 tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1e3852',
                        primaryDark: '#0f253c',
                        accent: '#3B82F6',
                        accentDark: '#2563EB',
                        lightGray: '#f8fafc',
                        darkGray: '#64748b',
                    },
                    fontFamily: {
                        poppins: ['Poppins', 'sans-serif'],
                    },
                    animation: {
                        'fade-in-up': 'fadeInUp 0.6s ease-out',
                    },
                    keyframes: {
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(30px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        }
                    }
                }
            }
        }