import {
    createStyles,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
  } from '@mantine/core';
  import { IconCheck}  from '@tabler/icons-react';
import Image from 'next/image';
  
  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl * 4,
    },
  
    content: {
      maxWidth: 520,
      marginRight: theme.spacing.xl * 3,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontSize: 44,
      lineHeight: 1.2,
      fontWeight: 900,
      fontFamily:"Roboto",
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: 28,
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      position: 'relative',
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      borderRadius: theme.radius.sm,
      padding: '4px 12px',
    },
  }));
  
  export function Hero() {
    const { classes } = useStyles();
    return (
      <div>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={`${classes.title} whitespace-nowrap `}>
                HighPerformance <span className={`${classes.highlight} `}>&</span> Rich EC <br /> 
              </Title>
              <Text color="primary" mt="md" className=' lg:text-xl '>
                shopidy最新FW「hydrogen」を使用した高速でリッチなECサイトを業界最安値で制作します。
              </Text>
  
              <List
                mt={30}
                spacing="sm"
                size="lg"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={12}  />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>初期費用0円~</b> 
                </List.Item>
                <List.Item>
                  <b>3Dモデル対応</b> 
                </List.Item>
                <List.Item>
                  <b>フルカスタマイズ</b> 
                </List.Item>
              </List>
  
              <Group mt={50}>
                <Button radius="xl" size="md" className={classes.control}>
                  Get started
                </Button>
                <Button variant="default" radius="xl" size="md" className={classes.control}>
                  Source code
                </Button>
              </Group>
            </div>
            {/* <Image src="/undraw_shopping_app_flsj.svg" width={500} height={500} className={`${classes.image} py-20 absolute left-1/2 -z-10 `} /> */}
            <Image src="/undraw_shopping_app_flsj.svg" width={500} height={500} alt="" className={` ${classes.image} absolute left-1/2 top-24 -z-10`} />
          </div>
        </Container>
      </div>
    );
  }