--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: sources; Type: TABLE; Schema: public; Owner: librarian; Tablespace:
--

CREATE TABLE sources (
    id integer NOT NULL,
    ip character varying(45) NOT NULL,
    path character varying(64) NOT NULL,
    username character varying(32) NOT NULL,
    password character varying(64) NOT NULL,
    share character varying(32),
    type character varying(32) NOT NULL,
    server character varying(32) NOT NULL,
    name character varying(32) NOT NULL,
    domain character varying(32)
);


ALTER TABLE sources OWNER TO librarian;

--
-- Name: sources_id_seq; Type: SEQUENCE; Schema: public; Owner: librarian
--

CREATE SEQUENCE sources_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE sources_id_seq OWNER TO librarian;

--
-- Name: sources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: librarian
--

ALTER SEQUENCE sources_id_seq OWNED BY sources.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: librarian
--

ALTER TABLE ONLY sources ALTER COLUMN id SET DEFAULT nextval('sources_id_seq'::regclass);


--
-- Name: sources_pkey; Type: CONSTRAINT; Schema: public; Owner: librarian; Tablespace:
--

ALTER TABLE ONLY sources
    ADD CONSTRAINT sources_pkey PRIMARY KEY (id);


--
-- Name: unique_id; Type: CONSTRAINT; Schema: public; Owner: librarian; Tablespace:
--

ALTER TABLE ONLY sources
    ADD CONSTRAINT unique_id UNIQUE (id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: sources; Type: ACL; Schema: public; Owner: librarian
--

REVOKE ALL ON TABLE sources FROM PUBLIC;
REVOKE ALL ON TABLE sources FROM librarian;
GRANT ALL ON TABLE sources TO librarian;
GRANT SELECT,INSERT,REFERENCES,DELETE,UPDATE ON TABLE sources TO PUBLIC;


--
-- Name: sources_id_seq; Type: ACL; Schema: public; Owner: librarian
--

REVOKE ALL ON SEQUENCE sources_id_seq FROM PUBLIC;
REVOKE ALL ON SEQUENCE sources_id_seq FROM librarian;
GRANT ALL ON SEQUENCE sources_id_seq TO librarian;
GRANT ALL ON SEQUENCE sources_id_seq TO PUBLIC;


--
-- PostgreSQL database dump complete
--