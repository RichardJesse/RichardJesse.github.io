class Component extends OpenScript.Component {}

class Index extends Component {
  render(...args) {
    
    
return h.div(
    h.h1(        
        {id: "Main sports"},
        "Sports"
    ), 
    h.div("Click any of the links below to watch any game you want"), 
    h.div(        
        {class: "card"},
        h.h2("Totalsportek"), 
        h.a(
            {
                href: "https://www.totalsportek.to",
                target: "_blank"
            },
            h.img({src: "data:image/jpeg;base64,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"})
        ), 
        h.p("It has links to many high quality streams to watch games across all sports!! .")
    ), 
    h.div(        
        {class: "card"},
        h.h2("Score 808"), 
        h.a(
            {
                href: "https://afr.808scoretv.com/football.html",
                target: "_blank"
            },
            h.img({src: "https://th.bing.com/th?id=OIP.ymwjhPOloYP3Ee23uscuWgHaD0&w=348&h=179&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"})
        ), 
        h.p("This is a direct link to live games and is reliable and stable.")
    ), 
    h.div(        
        {class: "card"},
        h.h2("60 MINUTES online"), 
        h.a(
            {
                href: "https://wc.60mins.online/p/ads.html",
                target: "_blank"
            },
            h.img({src: "https://th.bing.com/th/id/OIP.1g0SdOs11f8OlreRSFzgWQAAAA?w=182&h=182&c=7&r=0&o=5&pid=1.7"})
        ), 
        h.p("This is a high speed ultra-clear streaming site to bring you all your favourite games in HD.")
    ), 
    h.div(        
        {class: "dropdown"},
        h.button(            
            {class: "dropbtn"},
            "What we have"
        ), 
        h.div(            
            {class: "dropdown-content"},
            h.a(                
                {href: "#Main sports"},
                "Sports streams"
            ), 
            h.a(                
                {href: "#Main movies"},
                "Movie Streams"
            )
        )
    ), 
    h.h1(        
        {id: "Main movies"},
        "Movies"
    ), 
    h.div("To get movies check here to get movies from"), 
    h.div(        
        {class: "card"},
        h.h2("Look Movies"), 
        h.a(
            {
                href: "https://lookmovie.studio/page/2/",
                target: "_blank"
            },
            h.img({src: "https://th.bing.com/th?q=Lookmovies+La&dc=3&w=100&h=100&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=KE&setlang=en&adlt=strict&t=1&mw=247"})
        ), 
        h.p("A clear movies site with a large variety to choose from")
    ), 
    h.div(        
        {class: "card"},
        h.h2("Sflix movies"), 
        h.a(
            {
                href: "https://sflix.to",
                target: "_blank"
            },
            h.img({src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0ATwDASIAAhEBAxEB/8QAHAABAQACAwEBAAAAAAAAAAAAAAECBgQFBwMI/8QAShAAAQIEBAIFBgoIAwkBAAAAAQACAwQRIQUxQVEGYRJxgZGhEyKxwdHwBxQVFiMyQlOS8RckM1JUcrLhNlViJjQ1Q0Rkc3SzY//EABsBAQEBAAMBAQAAAAAAAAAAAAABAgMEBQYH/8QALxEAAgEDAQYFAgcBAAAAAAAAAAECAwQRMQUSIUFRUhMUFVORBqEiIzJCYXHRYv/aAAwDAQACEQMRAD8A8qV3vqoM9lcvfNchketVTeyqECIiABVQaq6qlC3HgiQ8pMx5512wfomg5VcK1Wnbr1bhOVEDB5Z9POjgRHU1OV12LaOZ56HibcrujatL93A76p31r2rK9qGmp5Kb5HS++yy9K9NnwEUZVO5tkhdQVJKlQASbLjRIhdlQAb7LG7k1KSgj6PjONQCQMl86nmsLaGut9kJFC5zg1mVa0Vxg6+XJmdSaD3KyqRTOg23XHEzKffw/xBBNSt/poeYP1gsPBtQl0OQDW5JoTfZWpIJGvm05BccTUprHh3NgHBUTMofNEeHnUEOC42jajLocirgSRTIVvdZVIFK5VqFxvjMpf9YhDc9IVssvjMncmPCF7kuFCuNo2lJcjkVPRbl3rr8WxeVwmA+NFcDFI+jZq4811OMcV4fIB0GV6MeYFQC0gw2nmtEe/FMcmi97i9zjcvPmQ28lwSkuR7thsudX8ytwivufCfnZrE5x8eJV0SK6jGtF6VsKBbzwrw2ZUMn51pEZwrCZ+4DqUwXBsBwprJmdm5aLM5+c8FjP5ars5zirA5RpIjeWcKUEEgrCWOJ37y8nVj5e1i8dTYKnSq6jF+IMPwiE5z4jYkxcMhB1b7OotMxPjXEJlroUmwQIZBo8ftKLVIsWLHe6JGe573Cpc41NSo2ZtNizbUq/BdDm4ris3isy6PMG1SWMFKNr1LrjkPeiu+1lL35rB9VCEYRUYrCQ7dU9qdWyd+SGxkd1Kb5q6gBDSqAiIiAKK9iiAIiKEMVR7+1TtV7evZCjdVTluFUIERKIAFVAqhStFXMB1cB3r2bBmBmFYaxtg2CKLxptOkw7Oae4r2fBnB2F4c4ZGCKLvWmrPl/qPjCH9nOpT31VRCQAScrrvnyK0yfGM+nmi649L0zqcuSOJLiaa+aa5qVA6V759S3u4R0XPelkzFDTIXpUrzbiDHJ2bnY0GFFfCgQHuYGwyW9ItNCTRejihDaiuua804gwebk52NGbDc+DGe57XMBN3GtDRdS6Ut3gfRfT/guu/ExnHDJ0/wAZm/v43Lz3J8Ym7fTxvxuyWHk41voouv2HexPJxrfRRsvu3exebxPvd2HRfYz+MTVvp4udfruV+MTdaCPG/G7wWAhx7fQxsvu3J5ONW8KLv+zf7EG7DovsZ/GJs28vG/GboJibNR5eNkc3nJY+Tj0tBi11PQdfwUMKNb6GKL3PQffwUyy7sP4+xjdxBNyTnqTus2RY0InycR7Dkeg4ivcp5ONceSi0B+7d7E8nHy8lFof/AM3exC/hxgrosZ4o6I93W4kL505XX06EQGphxGADVjqDvWFKWOevWhVhaE/LsT8uxPftT37VCimY7aoU9WaHZCkRPamhQE9SpuCpYq7IUiaoiEChVUohAiIoDHfxoqNPeynPv5q+xCjnuqp+6qhAiJTVAUIgRUoXrfCcx5fBpRtamA0Q3cjmvJFu/AmICHGmMPe6gigxWkmwIAFF2baW7PDPG21Q8a2ytVxPQvavnHcBDI1X2AuNslxpsgBoyFTVerHXB8FV4QbOJWpOo55V5KitbgA0vsSscxQWr3NCCnm0+ybV1G652jzEZipvuKWzqvp0GEAOAI5hfK1TY0OyzDwKA15VXFKJyQlhgS0of+Syunmj2LISsmP+Uy5FPNHjZUPFQsum06m97ZLicDsKrLqQS0pU/Qszp9UexZiVkzlAh/hCnlW88+jXkshFZQUr2LjcDlVWXUfFZP7iH+EexZCVk6/sYf4QnlmVpQqiM3Yri3DmVd9xfiknrAh0/lHsWXxSS/h4R280exTyzPGiy8rD0PV1rLicqr/9HziYXhMcERJSE4dVPQupnODcAmg4w4Il3EfWh1N+0rvRGhHI0yqvqHsORC4XD+Du0rucXmMjy/FOBcTlGuiyj/Lw2gk1s89TQtSiwo0BzocaG6G8G7Xgg9d1+gAukxvhrDsYhPJY2HMivQiNtU8yuFw6HvW21HlRq6Hi+6H+y7HFsIncImHQJltqnoPA81w5FdafFcZ9BCSmt6OgT2olUNEtUorqohQiIhAhRSqECIiAx5KjbX1Kbc809ahS81VLJqhCoiiAoVUVCpQuRJzUWTmZeZhkgwntcQLVANaLj2RM44kcVJOL5nuGFYhBxKTgTMM3exvlGj7LqVNV9J0eaw01K8t4Z4gi4PMiHEJMpFNHg/YqfrL1J8WBNyjJiC5r2EVDmmue9F7FvWU8H59tWwlbKSS/DyOAK23FeiOWtUFLUsCb8uSgr26HdUXsBbIt9dV6LR8smZZ1rv0baBLg5XoKVUF6ilhlfVK66DPevUsNGjMVItcV0VBqXHQWCwJFjSlTehyVubE13GS42ipmV+ql7rK9bZejmsAb0pUDXnsrYg5mqw0byZC1b1dqqdBe1yVjryp3K5lp5UqfYsNG0zKooDuqsRfUAtNL6qgg323XGzSZlp6QqC4Ct66dSx2Ot7oCsNGk8HIhzERtK3BOWtFzGRWxK0sdl1oN6U5BVpLSC2ta0K4ZQydqlcShrofTGcHlMYlIkCM0B/RPk30uDnmvFsSkJnDJuPKTDSHQ3UBNqjMUXucCOHea4+dutY43wNs9J/HoLR8ZlhcAXe03JNF1pxPq9l3qTUW+DPJ0vnVL651SxK4T6kV71EO6IUJdEQgUCqiAFERQhjfkqL9inULaJ4UQpUCe/wCSuumioCIUUIFbKIqCoiIULvsD4kncJJhOJiSjzR8NxJA5hdCi1GTi8o4qtGFaG5NZR6tJYrh+IM6cGK3zvsPID2nk1c7W4BtSvJeQQZiPLvESC90N4pQsNCthkeLZ2B0WTDGxGW6Trl5p1levSvotYnwZ8Ne/TVWDcrZ5XTmb8BU0/DTTmrU0duLE8lr0vxXg8UUd5WG7/XQAdS57MdwV1KTkFpzu4a7rtqtTloz5+dhc03iVN/B2hzoBQC9dexK5f6hUVyFNF1vy1glBSfl7HV6pxrBL/r8uet48FN+HUx5Wv2P4Z2Wda5UqK515Kg9YsKLrflvBLfr0vuavFggxvA6j9fl66eesOUepfK1+x/DOzG2W1FbGxqa3XWDHMDrX4/LjPJ4ushjmBU/4hL/jC43KPU2rWv2P4Z2Wdcqg+arU3BFqCwzqus+W8CoKT8sb6vCoxvAyTWflwTaoeFlyj1NK2rL9j+Gdne1BZW46tl8IUeWmGeUgRmxIZ+0w1C+tSctN9Vk42mnhmQqLcuyqoI2pv17rHK/gr25rLQTMwS00qfYuwY5szBiwXUJex0M12cKLra6ml9uS+sGIWvY61K3ouGcMo7dvWdOeTx3HpE4bis/KgeYyK4Qzu1dbYHkt2+EOWZDxGSmGCgjQHOed3dJaTmF0GfpttU8SlGRO9ERQ7AREQhEREIERFAY3qnb2IfFEKNvFXkg/sOtLV60BdkUrnTcBVCBERAAqoqqUIiICqInJCl9aUGdlk2HGdZsKIdiGuPoXIZh2IxAC2XiU5tK0ot6I45VYR/U0ji0G1upABy61zfkvE/4d/cnyXif8M/uV3JdDj8zR7l8nCoL2F0AHLkub8l4of+mfc7J8lYp/DP7k3JdB5mj3L5OFQXsOaUbTILm/JWKfw0TlYq/JWK6yz9sk3JdB5il3L5OFRtBYKAC9QPfZc35KxX+GfnSlNVRhWK5iWftkm7LoPM0e9fJ2fCuITEDEZeX6TnQY5IcwmoFBagXpR5m1iKZrSuGeHpqBMMn51vQ6AJhMqL1GZW6jMHO2f9l6NvGSh+I+A25Wo1Ln8npxLVtS6ptmqCLEa5VyWNzXICvere2l1ytHiJmVSFa6ZgVyWN1amyw0ayajx8REgYa4/Wa0N8SvPlvPHUWhkoJIqW9OnaVoy82qsTZ+k7Hk5WcGwiIuM9YIUqohAiIoAVDXRVSoQGPrQc0tlWlE9BQFp7n0q9fapvroepNev1IUp16wrX0qJtzVIVE2uiAKqIgKiNBJAAJJsAMyVt2B8ONcGTc82586FCPpcCuajQlWluxOle31Kyp+JVf9LmzpsOwPEcRIc1hhwrVfE823Kq2yS4WwuX6Lo7fjDxQnp2FeVF3jGtY1rGgNa3IAUAAWQK96jY06ay1ln57e7eubltQe7Hov9MIUvLQABBhMZa3RHtX1PU3IUoBZQelXXK+oXa3UtEeHKbk8tmR2rlyF1BmbDLOgsmZIGuqZivNRomSi9CaCg5Kg1vYVNMh4KVOVBU5HRK3rTKxCxguTKx250AOWyyrc9dKUHgsW00yobn1IDYV0rfU9Sy0ayZVGWxpkFkMx17BYVJAoQKup1clbc7mndquNouTKooQaZ6rK1ezVYdxrnsr+6L+tYaNJmVrA0pRW9NKj6qxty59SvK1TkuNo2ZVu3PXJUddbrGuXKotkvhNzMOUlJiYe4BrGOodOlSyxJY4nJBOTUVqef8YzIj4mIYP+7MMM9dVrS+83MPm5mYmH/Wivc49q+C8ect6TZ+rWlHwKEaXRBEqhWTskKIigCIpZUCqJl6ksgMT2UzVtQ2U96p7KlQpaZHx3T3Cbd6Zk9VkBUy9A9iD3qmY8UA1yKql03QFRFzcLknT85AgAVaCHxP5AbrcIuUlFcziqVI0oOpLRHfcNYK2IRPzTKsH7BrtTnU8luY0yAyAXzhw4cGHDhQxRkNoa0cgs19Zb0FRpqKPyPaF9O9rOpLTl/CMuaXUqLq89lztHQLoryCx/NUZHx5rGAZDnp3pmKaj0KVqUqNtVnBoyByOg30Vzrz71PNOdjrTVAbW1JsuPBSiptWhCtRvTQg3osdB4lZVpQaUy5rOCpl1sPOF+sK1oa6UrVY6AEC2V9VQPOFshXkFlo0ZC2ot6Crb6tDUZXvRYg5cq1Gh7VQaakUWGilGZIyAzWQJIrT+/UsK1POlajIhZXNKX2C42jWTLU0tW/JaNxhjAiO+TZd9YbDWOW5F2You14g4hhYfDdKyzw+beCHOFxDB5iy86e973Oe9xLnEkk3NSvOuayxuRPsNhbMk5K5qrgtP9MUSqlV559uEuiKEF0REAU353TVXbtQE1Klf7dSvLf0qX5oUl9ktfPZNO1PWgKEvUV5qdvJXvQDr1VFL7ArEGlTtkr6CgL2a1TbTNTXrVFPTVUFqtz4QlGtgzE04fSOcGsJ/dIWl7Ze+y3HCuIcJkZGWl3sjGIxtIhbShPJd6wcI1d6b0PA27GtUtfDoRy2+OOhtqLoPnZg/3cfwT52YP93H8F9B5qj3HwHpN77TO/V0Nlr/zswj7uP4J87MI+7j+Ceao9yHpN77TNhuO5L961752YR93H8E+dmEfdx/BTzNHuQ9KvfaZsNe0LLOi108WYQDToR/BZHizCP3I1raLDuaPcX0q89pmwV3tT0rIHI93Na6OLcHr9SNbqT524PY+TjX0ssu4pdxfSrz2mbCDnvXLdZZUPPu5LXfnbg/7ka3Unztwa56Ea9tFh3FLuL6Vee2zY/3rZmgHrRppQV1Wu/O7B7eZHqLaJ87sGF/Jx8+SnmKXcVbKvPaZsYuHeA0VFLC5sc/WtWicY4Y0HycGOST/AKaBdZNcZTsTpNloMNgIp0nDzvBcU7qlHjk7NLYl7Vf6Mf2zeIsaDLt6ceKyG0M+04DuqtSxji1tHy+HZ06DoxsRzC1WbxCfnXVmI73jRpPmjkAuJkvOrXjnwgsH09h9PU6LU673n05GT3viOc97i5zjVxJuSsSoi6J9SkksIImyKAiqIqBZTXOya2T12KgCH0ZqHREKPzVruaKclO7tQE1CvJBy6lBtsgKg06+9Pblul7nJAW+2eie/ameZRAOpKp6PSnuEBfVRPyU9+tNq+GiAuXoVUv40HNZCHFOUN7hmOi0m/YgIiy6EW9YcQUz6THAeKx7UARE7UIEUqN1ajfxCpQiVG470QFshXcYdwxxHi0ATMhJ+VgkkB5d0QSM6K4hwvxJhcEx52SLIQIHSYen30UHE6ZM9CeoL6S8F8xMS8uz68eI2EzrdZe8YHwJw5IyMuI8q2NMxGNfGiPJr0iKkUU0B4FqbX5pdesce8F4XJ4fFxbDYQgfF6GOxtSH1NAbrycqpgCqHREQgREyQBE/JS/YgLX+ylzdBbnsm/O4Qo/MJ+ah9F09Yr1IBuNPQnvXdOz+6b+lAPT6ksnv1oO5CGNffdPTsiuyFF+1BfLxU0rlUpYIDLvup155oNqp7hAX37ECmyu4GqAcr1K+8rLTE3MQJaWhl8eM9sNjQCbutU8l8CduVOS9D+CuSl4+LzE1EaHOgQXtYHUIqaGtEYNl4f+DLC5aHCj4x+sx3NBdAcKw2GmQIutxhcN8NQWhkPDZZrRkA1dutT4n43wzhuMyViwY0aZexr+jDA6LQbgkrGpo7WJw3w3GaWRMNlnNOYLVpXFfweYYZOZncIYJeJAY+M6C2gYWtBcSDnVfOX+FrDi4CYkJkAmgMPo266ldrifH/AA5GwKfjS8asxHhPl2S7iPKgxGFvSI2CLJDwzIXzFjVeo8EcB4fiEi3E8Xb5TypIhQD9UN0cV5a8k9MnM1J71+juDf8AD+Gf+Nv9IWmRHF/R/wAF/wCWwu5P0f8ABf8AlsHuK2WZjw5WBFmIlehCa57qZ0ArZaT+lHhcEjyU5YkfVboabqZZTsf0f8F/5bC7itA+EThnCsDhYbM4fAbBhzEYwSxuVWtrVbb+lHhb7qc/C32rQuOOL4HEjpSBKQ4jJSWd5RvlQA50QihNkWc8QelfBx/hPDP/ACTH9a2HF4MKNhmKMiMa5vxSYIDgDQhhoVr3wcf4Twz+eY/rWy4n/wAOxT/05n/5uU5lPzJLRjJzktHA6Rlo4iAHIlp1X6HwTibA8TkJeM2cgQnhjWxYcaIxjmuAvQOOS/OrWeVmGw8unE6PeV6vh/wWYdFlJePGn5psWNCZE+hdRo6QrRaeOZlHK+ETijDBhUbCZSPDjx5ujXuguD2sDTXMLxlbvxfwM7h6FDnJaM+NKuJDzENXtPMro+GuHZziSeErBPQgs86PFNaMGdKjVFoQ6S90Xrc78FElDlIj5KbjvmmsJAikFjiBkAAvK5yVmZGYjS0wwsiwnFrgdaWqFclPgNVPath4U4amOJZ8QKuZKQrzMVmYBBoAVuWLfBUJeWiRsMmnPiQ2l7mzBqXNaKmlLJkYPLKnx1Q69Sziw3wXxIcQEPY4tcHaOFl8/wA0BVPe2XYn5/2Ta+SAenPsT1+Cb+rRTL3ugL2IfsjxUvv/AHQ5k5UyQA3r6vWrUKaVypolUBjVXNEQo1poqMidskRCEypzV9WSIgA05lWgoOZKIgKMgvSPgne/5TnodfNMF7iOYARFGRHs61ziXh3BMXheUnpcviMFnse5j7WuW3RFlamzwrH8PlMPnHwZZrmww6wc4uPeV09BU9YRFvkZDj5ruQX6P4OH+z2FneE30BEWWVHZYwAcLxGv8PE/pK/MDheJ/M/0lEViRk+zXVNCeQRFoH6A+Dgf7J4X/PMf1rZcSAOH4mP+zmf/AJuRFxvU0fmOB/vsD/2G/wBS/TmHCkhhw/7WB/QERWRFoav8I4B4YxA6gwwO0rVfgkjPETF4I6PQcWPPmjpVDRqiK/tHM9cXkXwryElBdIT0OEGTEZ4hxHNsHNA1GSIpHUM3bgjD5GRwGR+LQg0xmmJFcbuc47nNbHMWl5k7QYv9JRFHqU/MGKuLsSxBxzMd9ds6LhG3bZEWjIcaE9ilSiKguVeZohFiiIBTIaUSguiIQn5KIihT/9k="})
        ), 
        h.p("One of the best free movie streaming site get all the latest movies here.")
    ), 
    h.div(        
        {class: "card"},
        h.h2("Gojara movies"), 
        h.a(
            {
                href: "https://www.goojara.to/watch-movies-az",
                target: "_blank"
            },
            h.img({src: "https://th.bing.com/th/id/OIP.vYMtLkUAdlr-FWAt6qLT9QAAAA?w=279&h=180&c=7&r=0&o=5&pid=1.7"})
        ), 
        h.p("A marvelous movie streaming site with movies being updated regularly and is very stable .")
    )
    );

    
  }
}
