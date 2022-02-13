const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
		screens: {
			xs: '479px',
			// => @media (min-width: 479px) { ... }

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: 'white',
			bg_blue: '#f9fcff',
			blue: colors.sky,
			yellow: colors.yellow,
			gray: colors.gray,
			red: colors.red,
			green: colors.emerald,
			bronze: colors.bronze,
			silver: colors.silver,
			gold: "#f1ae00",
			platinum: colors.platinum,
			diamond: colors.diamond,
			black: '#000000',
		},
		boxShadow: {
			dark: '0px 10px 30px 0px rgba(209, 213, 219, 1)',
			light: '0px 10px 30px 0px rgba(229, 231, 235, 1)',
			lightBlue: '0px 10px 30px 0px rgba(168, 219, 245, 1)',
		},
		borderWidth: {
			DEFAULT: '1px',
			0: '0',
			2: '2px',
			3: '3px',
			4: '4px',
			6: '6px',
			8: '8px',
			'0.7px': '0.7px',
			'0.5px': '0.5px',
			'0.3px': '0.3px',
		},
		minHeight: {
			screen: '100vh',
			'75px': '75px',
			'50px': '50px',
			'25px': '25px',
			'10px': '10px',
			0: '0',
			full: '100%',
		},

		extend: {
			fontFamily: {
				'avenir-med': ['"Avenir Next Medium"'],
				'avenir-reg': ['"Avenir Next Regular"'],
				'roboto-reg': ['"Roboto Regular"'],
			},
			spacing: {
				'2xlscreen': '1549px',
				xlscreen: '1280px',
				lgscreen: '1024px',
				mdscreen: '760px',
				smscreen: '640px',
				mobilescreen: '100%',
				'1549px': '1549px',
				'1354px': '1354px',
				'1048px': '1048px',
				'1029px': '1029px',
				'1024px': '1024px',
				'914px': '914px',
				'850px': '850px',
				'836px': '836px',
				'800px': '800px',
				'756px': '756px',
				'724px': '724px',
				'700px': '700px',
				'682px': '682px',
				'638px': '638px',
				'624px': '624px',
				'600px': '600px',
				'580px': '580px',
				'550px': '550px',
				'504px': '504px',
				'500px': '500px',
				'494px': '494px',
				'420px': '420px',
				'400px': '400px',
				'388px': '388px',
				'366px': '366px',
				'350px': '350px',
				'324px': '324px',
				'298px': '298px',
				'297px': '297px',
				'288px': '288px',
				'265px': '265px',
				'258px': '258px',
				'254px': '254px',
				'250px': '250px',
				'246px': '246px',
				'236px': '236px',
				'220px': '220px',
				'207px': '207px',
				'196px': '196px',
				'194px': '194px',
				'184px': '184px',
				'181px': '181px',
				'176px': '176px',
				'172px': '172px',
				'166px': '166px',
				'163px': '163px',
				'159px': '159px',
				'141px': '141px',
				'139px': '139px',
				'137px': '137px',
				'128px': '128px',
				'123px': '123px',
				'120px': '120px',
				'119px': '119px',
				'117px': '117px',
				'115px': '115px',
				'111px': '111px',
        		'100px': '100px',
				'96px': '96px',
				'93px': '93px',
				'82px': '82px',
				'81px': '81px',
				'80px': '80px',
				'72px': '72px',
				'68px': '68px',
				'66px': '66px',
				'64px': '64px',
				'61px': '61px',
				'60px': '60px',
				'57px': '57px',
				'54px': '54px',
				'52px': '52px',
				'51px': '51px',
				'50px': '50px',
				'48px': '48px',
				'47px': '47px',
				'45px': '45px',
				'44px': '44px',
				'42px': '42px',
				'40px': '40px',
				'37px': '37px',
				'36px': '36px',
				'35px': '35px',
				'33px': '33px',
				'32px': '32px',
				'31px': '31px',
				'30px': '30px',
				'29px': '29px',
				'28px': '28px',
				'26px': '26px',
				'25px': '25px',
				'24px': '24px',
				'21px': '21px',
				'20px': '20px',
				'19px': '19px',
				'18px': '18px',
				'16px': '16px',
				'15px': '15px',
				'14px': '14px',
				'12px': '12px',
				'11px': '11px',
				'10px': '10px',
				'2px': '2px',
				'1px': '1px',
				'0.7px': '0.7px',
				'0.5px': '0.5px',
				'0.3px': '0.3px',
			},
			borderRadius: {
				'43px': '43px',
				'25px': '25px',
				'24px': '24px',
				'23px': '23px',
				'22px': '22px',
				'21px': '21px',
				'20px': '20px',
				'19px': '19px',
				'18px': '18px',
				'17px': '17px',
				'16px': '16px',
				'15px': '15px',
				'14px': '14px',
				'13px': '13px',
				'12px': '12px',
				'11px': '11px',
				'10px': '10px',
				'9px': '9px',
				'8px': '8px',
				'7px': '7px',
				'6px': '6px',
				'5px': '5px',
				'4px': '4px',
				'3px': '3px',
				'2px': '2px',
				'1px': '1px',
			},
			fontSize: {
				'90px': '90px',
				'64px': '64px',
				'48px': '48px',
				'36px': '36px',
				'32px': '32px',
				'28px': '28px',
				'24px': '24px',
				'22px': '22px',
				'18px': '18px',
				'16px': '16px',
				'14px': '14px',
				'12px': '12px',
				'10px': '10px',
				'8px': '8px',
				'2xs': '.65rem',
			},
		},
	},
  plugins: [
	require('@tailwindcss/line-clamp'),
  ],
};
